import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { sign } from 'jsonwebtoken';
import { Model } from 'mongoose';
import { Usuario } from 'src/usuario/models/usuario.model';
import { JwtPayload } from './models/jwt-payload.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('Usuario')
        private readonly usuarioModel: Model<Usuario>,
    ){}

    public async createAccessToken(userId: string): Promise<string>{
        return sign({userId},process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRATION
        });
    }

    public async validateUser(jwtPayload: JwtPayload): Promise<Usuario>{
        const usuario = await this.usuarioModel.findOne({ _id: jwtPayload.userId})
        if(!usuario){
            throw new UnauthorizedException('Usuario nao encontrado');
        }

        return usuario
    }

    public returnJwtExtractor():(request: Request) => string{
        return AuthService.jwtEstractor;
    }

    private static jwtEstractor(request: Request): string{
        const authHeader = request.headers.authorization;

        if(!authHeader){
            throw new BadRequestException('Bad Request.')
        }

        const [, token] = authHeader.split(' ');

        return token;

    }
}
