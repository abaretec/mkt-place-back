import { PartialType } from '@nestjs/swagger';
import { CreateAreaVagaDto } from './create-area-vaga.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateAreaVagaDto extends PartialType(CreateAreaVagaDto) {

    id:number;

    @IsNumber()
    fk_areatrabalho: number;

    @IsNumber()
    fk_vaga: number;

    @IsNumber()
    nr_nota: number;
}
