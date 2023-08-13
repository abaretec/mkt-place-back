import { IsNumber } from "class-validator";

export class CreateFerramentaVagaDto {
    @IsNumber()
    fk_ferramenta: number;

    @IsNumber()
    fk_vaga: number;

    @IsNumber()
    nr_nota: number;
}
