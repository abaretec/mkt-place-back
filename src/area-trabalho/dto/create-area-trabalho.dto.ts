import { IsBoolean, IsString } from "class-validator";

export class CreateAreaTrabalhoDto {
    @IsString()
    nm_area_trabalho: string;

    @IsString()
    ds_descricao: string;

    @IsBoolean()
    fl_ativo: Boolean;
}
