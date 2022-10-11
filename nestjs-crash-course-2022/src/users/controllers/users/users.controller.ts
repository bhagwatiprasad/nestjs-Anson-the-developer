import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUserDto.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

// 'users' below is the route on which controller is registered
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  // @Get('')
  // getUsers() {
  //     return { usrname: 'Anson', email: 'email@e.c' };
  // }

  @Get()
  getUsers() {
    // console.log(sortDesc);
    console.log('getUsers controller')
    return this.userService.fetchUsers();
    // return {sortBy };
  }

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

  @Post('create')
  @UsePipes(new ValidationPipe()) // new ValidationPipe validate and generate errors according to CreateUserDto. 
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData);
    // const fakeUsers = this.userService.createUser(userData);
    return this.userService.createUser(userData);
    // return {fakeUsers};
  }

  //   @Post()
  //   createUser(@Req() request: Request , @Res() response: Response) {
  //     console.log(request.body);
  //     response.send("created");
  //   }

  // @Post('create')
  // @UsePipes(new ValidationPipe())
  // createUser(@Body() userData: CreateUserDto) {
  //     console.log(userData);
  //     return {};
  // }

  //   @Get(':id')
  //   getUserById(@Req() request: Request , @Res() response: Response ){
  //     console.log(request.params)
  //   }

  // @Get(':id/:postId')
  // getUserById(@Param('id') id:string , @Param('postId') postId: string){
  //   console.log(id , postId);
  //   return {id};
  // }

  //   @Get(':id')
  //   getUserById(@Param('id', ParseIntPipe) id: string) {
  //     console.log(id);
  //     return { id };
  //   }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if(!user) {
        throw new HttpException('User not found' , HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  // @Get()
  // getUsers(@Query('sortBy') sortBy: string) {
  //     console.log(sortBy);
  //     return {sortBy };
  // }

  // @Get()
  // getUsers(@Query('sortDesc' , ParseBoolPipe) sortDesc: boolean) {
  //     console.log(sortDesc);
  //     // return {sortBy };
  // }
}
