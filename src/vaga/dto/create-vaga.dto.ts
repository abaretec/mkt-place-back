import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateVagaDto {

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
