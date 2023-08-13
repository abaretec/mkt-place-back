import { IsNumber, IsString } from "class-validator";

export class CreateAgenciaDto {
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
    @IsString()
    nr_telcontato:string;
    @IsString()
    ds_email:string;
    @IsString()
    ds_tamanho:string;
    @IsString()
    ds_cidade:string;
}
