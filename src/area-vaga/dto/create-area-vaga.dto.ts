import { IsNumber, IsString } from "class-validator";

export class CreateAreaVagaDto {
    @IsNumber()
    fk_areatrabalho: number;

    @IsNumber()
    fk_vaga: number;

    @IsNumber()
    nr_nota: number;
}
