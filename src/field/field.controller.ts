import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFieldDto } from './dto/create-field.dto';
import { FieldService } from './field.service';

@Controller('field')
export class FieldController {
    constructor(private fieldService: FieldService) { }

    @Post()
    async create(@Body() body: CreateFieldDto) {
        return await this.fieldService.create(body);
    }

    @Get()
    async findMany() {
        return await this.fieldService.findMany();
    }
}
