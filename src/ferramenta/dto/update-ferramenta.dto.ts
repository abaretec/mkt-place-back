import { PartialType } from '@nestjs/swagger';
import { CreateFerramentaDto } from './create-ferramenta.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateFerramentaDto extends PartialType(CreateFerramentaDto) {
    
    id:number;
    
    @IsString()
    nm_ferramenta: string;

    @IsString()
    ds_descricao: string;

    @IsBoolean()
    fl_ativo: Boolean;
}
