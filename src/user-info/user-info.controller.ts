import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UserInfoService } from './user-info.service';

@Controller('user-info')
export class UserInfoController {
    constructor(private userInfoService: UserInfoService) { }

    @Post()
    create(@Body() body: CreateUserInfoDto) {
        return  this.userInfoService.create(body);
    }

    @Patch()
    update(@Body() body: CreateUserInfoDto) {
        return this.userInfoService.update(body);
    }

    @Get()
    async findMany() {
        return await this.userInfoService.findMany();
    }
}
