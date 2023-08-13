import { PartialType } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {

    id: number;

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
