import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class CreateClienteDto {

    @IsString()
    id_usuario: string;

    @IsString()
    ds_descricao: string;

    @IsDate()
    @Type(() => Date)
    dh_nascimento: Date;

    @IsDate()
    @Type(() => Date)
    dh_inclusao: Date;

    @IsBoolean()
    fl_ativo: Boolean;

    @IsNumber()
    nr_tipo_cliente: number;

}
