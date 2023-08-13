import { IsNumber, IsString } from "class-validator";

export class CreateAreaProfissionalDto {
    @IsNumber()
    fk_areatrabalho: number;

    @IsString()
    id_usuario: string;

    @IsNumber()
    nr_nota: number;
}
