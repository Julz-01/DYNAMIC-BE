import { Injectable } from '@nestjs/common';
import { Prisma, UserInfo } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';

@Injectable()
export class UserInfoService {
    constructor(private prisma: PrismaService) { }
    
    async create(createUserInfoDto: CreateUserInfoDto):Promise<UserInfo> {
        return await this.prisma.userInfo.create({
            data: {
                userId: 1,
                userFieldId: createUserInfoDto.userFieldId,
                value: createUserInfoDto.value
            }
        })
    }

    async findMany() {
        return await this.prisma.userInfo.findMany({
            where: { userId: 1 }
        })
    }
}
