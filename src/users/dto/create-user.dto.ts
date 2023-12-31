import { Type } from 'class-transformer';
import {IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

   /*  @IsNotEmpty()
    role: string; */
}