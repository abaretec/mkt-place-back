import { PartialType } from '@nestjs/swagger';
import { CreateFerramentaProfissionalDto } from './create-ferramenta-profissional.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateFerramentaProfissionalDto extends PartialType(CreateFerramentaProfissionalDto) {

    id:number;
    
    @IsNumber()
    fk_ferramenta: number;

    @IsString()
    id_usuario: string;

    @IsNumber()
    nr_nota: number;
}
