import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FieldModule } from './field/field.module';
import { UserInfoModule } from './user-info/user-info.module';

@Module({
  imports: [FieldModule, UserInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
