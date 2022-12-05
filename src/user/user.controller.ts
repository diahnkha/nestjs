import { Controller, Get, Param, Query } from '@nestjs/common';
import { get } from 'http';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){}

    @Get()
        async getUser(@Query() userid: string){
            return await this.userService.create();
        }

    @Get(':userid')
    async getUserParam(@Param('userid') userid: string){
        return await this.userService.create();
    }
}

//get
// http:localhost/api/user

//bedanya cara penulisannya

//get ada paramter, ada querynya
// http:localhost/api/user?id=123
//get ada paramnya, ada parameter
// http:localhost/api/user/123