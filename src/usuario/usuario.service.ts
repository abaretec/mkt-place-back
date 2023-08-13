import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { Usuario } from './models/usuario.model';
import { AuthService } from 'src/auth/auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { RetornoUsuarioDto } from './dto/retorno-usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectModel('Usuario')
        private readonly usuarioModel: Model<Usuario>,
        private readonly authService: AuthService,
    ){

    }

    public async signup(signupDto: SignupDto): Promise<Usuario>{
        const usuario = new this.usuarioModel(signupDto)
        return usuario.save();
    }

    public async signin(signinDto: SigninDto): 
    Promise<RetornoUsuarioDto>{
        const usuario = await this.findByEmail(signinDto.email);
        const match = await this.checkPAssword(signinDto.senha, usuario);

        if(!match){
            throw new NotFoundException('Credencial invalida')
        }

        const jwtToken = await this.authService.createAccessToken(usuario._id);

        var retornoUsuarioDto = new RetornoUsuarioDto();

        retornoUsuarioDto.id        = usuario.id;
        retornoUsuarioDto.nome      = usuario.nome;
        retornoUsuarioDto.jwtToken  = jwtToken;
        retornoUsuarioDto.email     = usuario.email;
        retornoUsuarioDto.telefone  = usuario.telefone;
        retornoUsuarioDto.tipo      = usuario.tipo;

        return retornoUsuarioDto;
    }

    public async findAll():Promise<Usuario[]>{
        return this.usuarioModel.find();
    }

    private async findByEmail(email: string): Promise<Usuario>{
        const usuario = await this.usuarioModel.findOne({email});

        if(!usuario){
            throw new NotFoundException('Email nao encontrado')
        }

        return usuario
    }

    private async checkPAssword(senha: string, usuario: Usuario): Promise<boolean>{
        const match = await bcrypt.compare(senha, usuario.senha);

        if(!match){
            throw new NotFoundException('Senha incorreta')
        }

        return match;
    }
}
