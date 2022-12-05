import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { get } from 'http';
import {UserRequest} from './user.request';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService, //dari user service dipanggil defaultnya readlonly 
    ){}

    @Get()
    async getUser(@Query() request: UserRequest){
        return await this.userService.get(request);
    }

    @Get(':userid')
    async getUserParam(@Param('userid') request: UserRequest){
        return await this.userService.get(request);
    }

    




    // @Get()
    //     async getUser(@Query() userid: string){
    //         return await this.userService.create();
    //     }

    // @Get(':userid')
    // async getUserParam(@Param('userid') userid: string){
    //     return await this.userService.create();
    // }
}

//get
// http:localhost/api/user

//bedanya cara penulisannya

//get ada paramter, ada querynya
// http:localhost/api/user?id=123
//get ada paramnya, ada parameter
// http:localhost/api/user/123