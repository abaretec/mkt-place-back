import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-jwt'
import { AuthService } from "../auth.service";
import { JwtPayload } from "../models/jwt-payload.model";
import { Usuario } from "src/usuario/models/usuario.model";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authService: AuthService){
        super({
            jwtFromRequest: authService.returnJwtExtractor(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(jwtPayload: JwtPayload): Promise<Usuario>{
        const user = await this.authService.validateUser(jwtPayload);

        if(!user){
            throw new UnauthorizedException('Sem autorização')
        }

        return user
    }
    
}