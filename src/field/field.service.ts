import { Injectable } from '@nestjs/common';
import { UserField } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateFieldDto } from './dto/create-field.dto';

@Injectable()
export class FieldService {
    constructor(private prisma: PrismaService) { }

    async create(createFieldDto: CreateFieldDto): Promise<UserField> {
        return await this.prisma.userField.create({
            data: createFieldDto
        })
    }

    async findMany(): Promise<UserField[]> {
        return await this.prisma.userField.findMany();
    }
}
