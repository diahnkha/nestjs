import { Injectable } from '@nestjs/common';
import { UserRequest } from './user.request';

@Injectable()
export class UserService {
    async create(){
        return "this is api for getting user";
    }

    async getparam(userId: string){
        return "api get userid " + userId;
        // return `api get userid=${userId}`;
    }

    async get(request: UserRequest){
        return `api get
        userid=${request.userId}
        username=${request.userName}
        alamat=${request.alamat}`;
    }

    async update(){
        return "api update";
    }


    async delete(){
        return "delete update";
    }
}