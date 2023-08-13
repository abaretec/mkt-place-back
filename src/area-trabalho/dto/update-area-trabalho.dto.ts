import { PartialType } from '@nestjs/swagger';
import { CreateAreaTrabalhoDto } from './create-area-trabalho.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateAreaTrabalhoDto extends PartialType(CreateAreaTrabalhoDto) {
    
    id:number;
    
    @IsString()
    nm_area_trabalho: string;

    @IsString()
    ds_descricao: string;

    @IsBoolean()
    fl_ativo: Boolean;
}
