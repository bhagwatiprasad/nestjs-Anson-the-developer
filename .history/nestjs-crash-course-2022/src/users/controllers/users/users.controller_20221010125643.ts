import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUserDto.dto';

// 'users' below is the route on which controller is registered
@Controller('users')
export class UsersController {
    // @Get('')
    // getUsers() {
    //     return { usrname: 'Anson', email: 'email@e.c' };
    // }

    @Get('posts')
    getUsersPost() {
        return [
            {
                usrname: 'Anson',
                email: 'email@e.c',
                posts: [
                    {
                        id: 1,
                    },
                ],
            },
        ];
    }

    //   @Post()
    //   createUser(@Req() request: Request , @Res() response: Response) {
    //     console.log(request.body);
    //     response.send("created");
    //   }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData);
        return {};
    }


    //   @Get(':id')
    //   getUserById(@Req() request: Request , @Res() response: Response ){
    //     console.log(request.params)
    //   }

    // @Get(':id/:postId')
    // getUserById(@Param('id') id:string , @Param('postId') postId: string){
    //   console.log(id , postId);
    //   return {id};
    // }


      @Get(':id')
      getUserById(@Param('id' ) id: number ){
        console.log(id);
        return { id };
      }

    @Get()
    getUsers(@Query('sortBy') sortBy: string) {
        console.log(sortBy);
        return {sortBy };
    }


}
