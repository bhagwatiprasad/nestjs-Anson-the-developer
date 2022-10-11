import { IsEmail, IsNotEmpty, IsNumber, isNumber } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    // @IsNumber()
    age: number;

    
}