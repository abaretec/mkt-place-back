import { PartialType } from '@nestjs/swagger';
import { CreateVagaDto } from './create-vaga.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateVagaDto extends PartialType(CreateVagaDto) {
    
    id:number;

    @IsString()
    ds_titulo:string;

    @IsString()
    ds_vaga:string;

    @IsString()
    id_usuario:string;

    @IsDate()
    @Type(() => Date)
    dh_inclusao:Date;

    @IsDate()
    @Type(() => Date)
    dh_vigencia_inicial:Date;

    @IsDate()
    @Type(() => Date)
    dh_vigencia_final:Date;

    @IsNumber()
    agenciaId:number;
}
