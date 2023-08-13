import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class SignupDto{
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    telefone: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    senha: string; 

    @IsString()
    @IsNotEmpty()
    tipo: string;
}