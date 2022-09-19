import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [
    FieldService,
    PrismaService
  ],
  controllers: [FieldController]
})
export class FieldModule { }
