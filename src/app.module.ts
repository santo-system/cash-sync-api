import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AppService } from './services/app.service';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
