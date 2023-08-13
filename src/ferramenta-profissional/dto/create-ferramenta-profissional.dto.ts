import { IsNumber, IsString } from "class-validator";

export class CreateFerramentaProfissionalDto {
    @IsNumber()
    fk_ferramenta: number;

    @IsString()
    id_usuario: string;

    @IsNumber()
    nr_nota: number;
}
