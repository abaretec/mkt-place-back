import { Inject, Injectable } from '@nestjs/common';
import { CreateFerramentaDto } from './dto/create-ferramenta.dto';
import { UpdateFerramentaDto } from './dto/update-ferramenta.dto';
import { Ferramenta } from './entities/ferramenta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FerramentaService {

  constructor(
    @Inject('FERRAMENTA_REPOSITORY')
    private ferramentaRepository: Repository<Ferramenta>,
  ) {}

  create(createFerramentaDto: CreateFerramentaDto) {
    return this.ferramentaRepository.save(createFerramentaDto);
  }

  findAll() {
    return this.ferramentaRepository.find();
  }

  findOne(id: number) {
    return this.ferramentaRepository.findOne({where: {id}});
  }

  update(id: number, updateFerramentaDto: UpdateFerramentaDto) {
    return this.ferramentaRepository.update(id, updateFerramentaDto);
  }

  remove(id: number) {
    return this.ferramentaRepository.delete(id);
  }
}
