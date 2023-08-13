import { IsBoolean, IsString } from "class-validator";

export class CreateFerramentaDto {
    @IsString()
    nm_ferramenta: string;

    @IsString()
    ds_descricao: string;

    @IsBoolean()
    fl_ativo: Boolean;
}
