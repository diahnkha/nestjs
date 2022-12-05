import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async create(){
        return "this is api for getting user";
    }
}

{
    "success": true,
    "path": "api/v1/user"
    "payload": []
}