import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        Logger.log(
          `{URL: '${request.url}', METHOD: '${request.method}', STATUS: ${response.statusCode}}`,
        );
        Logger.log(`Successful execution took ${Date.now() - now} ms`);
      }),
      catchError((error) => {
        if (error instanceof HttpException) {
          Logger.log(
            `{URL: '${request.url}', METHOD: '${request.method}', STATUS: ${error.getStatus()}}`,
          );
          Logger.log(`Unsuccessful execution took ${Date.now() - now} ms`);
          return throwError(() => error);
        }

        Logger.warn('An unknown error occurred');
        Logger.log(`{URL: '${request.url}', METHOD: '${request.method}'}`);
        Logger.log(`Unknown error execution took ${Date.now() - now} ms`);
        return throwError(() => new InternalServerErrorException());
      }),
    );
  }
}
