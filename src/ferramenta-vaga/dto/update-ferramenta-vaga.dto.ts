import { PartialType } from '@nestjs/swagger';
import { CreateFerramentaVagaDto } from './create-ferramenta-vaga.dto';
import { IsNumber } from 'class-validator';

export class UpdateFerramentaVagaDto extends PartialType(CreateFerramentaVagaDto) {
    
    id:number;
    
    @IsNumber()
    fk_ferramenta: number;

    @IsNumber()
    fk_vaga: number;

    @IsNumber()
    nr_nota: number;
}
