import { PartialType } from '@nestjs/swagger';
import { CreateAreaProfissionalDto } from './create-area-profissional.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateAreaProfissionalDto extends PartialType(CreateAreaProfissionalDto) {
    
    id:number;

    @IsNumber()
    fk_areatrabalho: number;

    @IsString()
    id_usuario: string;

    @IsNumber()
    nr_nota: number;
}
