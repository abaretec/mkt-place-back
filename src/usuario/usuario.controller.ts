import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { SignupDto } from './dto/signup.dto';
import { Usuario } from './models/usuario.model';
import { SigninDto } from './dto/signin.dto';
import { AuthGuard } from '@nestjs/passport';
import { RetornoUsuarioDto } from './dto/retorno-usuario.dto';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){

    }

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    public async signup(@Body() signupDto: SignupDto):Promise<Usuario> {
        return this.usuarioService.signup(signupDto);
    }

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    public async signin(@Body() signinDto: SigninDto):Promise<RetornoUsuarioDto> {
        return this.usuarioService.signin(signinDto);
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    public async findAll():Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }

}
