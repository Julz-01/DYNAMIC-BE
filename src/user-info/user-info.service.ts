import { Injectable } from '@nestjs/common';
import { Prisma, UserInfo } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';

@Injectable()
export class UserInfoService {
    constructor(private prisma: PrismaService) { }

    create(createUserInfoDto: CreateUserInfoDto) {
        // console.log(createUserInfoDto.userInfo);
        // return this.prisma.userInfo.createMany({
        //     data: {
        //         userId: 1,

        //     }
        // })
        // const test =  createUserInfoDto.userInfo.forEach(v => {
        //     this.prisma.userInfo.create({
        //         data: {
        //             userId: 1,
        //             userFieldId: v['fieldId'],
        //             value: v['value']
        //         }
        //     })
        // })

        return this.prisma.userInfo.createMany({
            data: createUserInfoDto.userInfo
        });

        // console.log(test)

        // return 'success!';
        // createUserInfoDto.userInfo.forEach(v => {
        //     console.log(v)
        //     if (v[1] !== null) {
        //         this.prisma.userInfo.create({
        //             data: {
        //                 userId: 1,
        //                 userFieldId: v[0],
        //                 value: v[1]
        //             }
        //         })
        //     }
        // });

        // return await this.prisma.userInfo.create({
        //     data: {
        //         userId: 1,
        //         userFieldId: createUserInfoDto.userFieldId,
        //         value: createUserInfoDto.value
        //     }
        // })
    }

    update(createUserInfoDto: CreateUserInfoDto) {
        const dtoData = createUserInfoDto;
        dtoData.userInfo.forEach(val => {
            this.prisma.userInfo.updateMany({
                where: { userId: val['userId'], userFieldId: val['userFieldId'] },
                data: { value: val['value'] }
            })
        });

    }

    async findMany() {
        return await this.prisma.userInfo.findMany({
            where: { userId: 1 }
        })
    }
}
