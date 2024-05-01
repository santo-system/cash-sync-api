import { createMock } from '@golevelup/ts-jest';
import { ExecutionContext } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';

describe(LoggingInterceptor.name, () => {
  const interceptor = new LoggingInterceptor();
  const mockExecutionContext = createMock<ExecutionContext>();

  it('should be defined', () => {
    expect(interceptor).toBeDefined();
    expect(mockExecutionContext.switchToHttp().getRequest()).toBeDefined();
    expect(mockExecutionContext.switchToHttp().getResponse()).toBeDefined();
  });
});
