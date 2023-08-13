import { PartialType } from '@nestjs/swagger';
import { CreateAgenciaDto } from './create-agencia.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateAgenciaDto extends PartialType(CreateAgenciaDto) {
    id:number;
    @IsString()
    id_usuario:string;
    @IsString()
    nm_agencia:string;
    @IsString()
    ds_detalhe:string;
    @IsString()
    ds_endereco:string;
    @IsString()
    nm_contato:string;
    @IsNumber()
    nr_telcontato:string;
    @IsString()
    ds_email:string;
    @IsString()
    ds_tamanho:string;
    @IsString()
    ds_cidade:string;
}
