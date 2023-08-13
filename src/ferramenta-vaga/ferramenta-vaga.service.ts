import { Inject, Injectable } from '@nestjs/common';
import { CreateFerramentaVagaDto } from './dto/create-ferramenta-vaga.dto';
import { UpdateFerramentaVagaDto } from './dto/update-ferramenta-vaga.dto';
import { Repository } from 'typeorm';
import { FerramentaVaga } from './entities/ferramenta-vaga.entity';

@Injectable()
export class FerramentaVagaService {

  constructor(
    @Inject('FERRAMENTA_VAGA_REPOSITORY')
    private ferramentaVagaRepository: Repository<FerramentaVaga>,
  ) {}

  create(createFerramentaVagaDto: CreateFerramentaVagaDto) {
    return this.ferramentaVagaRepository.save(createFerramentaVagaDto);
  }

  findAll() {
    return this.ferramentaVagaRepository.find();
  }

  findOne(id: number) {
    return this.ferramentaVagaRepository.findOne({where: {id}});
  }

  update(id: number, updateFerramentaVagaDto: UpdateFerramentaVagaDto) {
    return this.ferramentaVagaRepository.update(id, updateFerramentaVagaDto);
  }

  remove(id: number) {
    return this.ferramentaVagaRepository.delete(id);
  }
}
