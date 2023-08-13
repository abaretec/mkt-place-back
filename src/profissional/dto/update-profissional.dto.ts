import { PartialType } from '@nestjs/swagger';
import { CreateProfissionalDto } from './create-profissional.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateProfissionalDto extends PartialType(CreateProfissionalDto) {
    id:number;
    @IsString()
    id_usuario:string;
    @IsString()
    ds_descricao:string;
    @IsString()
    ds_historico:string;
    @IsNumber()
    vl_valor_hora:number; 
    @IsNumber()
    vl_salario:number;
}
