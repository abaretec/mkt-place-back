import { IsNumber, IsString } from "class-validator";

export class CreateProfissionalDto {
    @IsString()
    id_usuario: string;
    @IsString()
    ds_descricao: string;
    @IsString()
    ds_historico: string;
    @IsNumber()
    vl_valor_hora:number; 
    @IsNumber()
    vl_salario:number;
}
