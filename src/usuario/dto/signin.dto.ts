import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class SigninDto{
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    senha: string; 
}