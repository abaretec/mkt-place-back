import { Inject, Injectable } from '@nestjs/common';
import { CreateFerramentaProfissionalDto } from './dto/create-ferramenta-profissional.dto';
import { UpdateFerramentaProfissionalDto } from './dto/update-ferramenta-profissional.dto';
import { Repository } from 'typeorm';
import { FerramentaProfissional } from './entities/ferramenta-profissional.entity';

@Injectable()
export class FerramentaProfissionalService {

  constructor(
    @Inject('FERRAMENTA_PROFISSIONAL_REPOSITORY')
    private ferramentaProfissionalRepository: Repository<FerramentaProfissional>,
  ) {}

  create(createFerramentaProfissionalDto: CreateFerramentaProfissionalDto) {
    return this.ferramentaProfissionalRepository.save(createFerramentaProfissionalDto);
  }

  findAll() {
    return this.ferramentaProfissionalRepository.find();
  }

  findOne(id: number) {
    return this.ferramentaProfissionalRepository.findOne({where: {id}});
  }

  update(id: number, updateFerramentaProfissionalDto: UpdateFerramentaProfissionalDto) {
    return this.ferramentaProfissionalRepository.update(id, updateFerramentaProfissionalDto);
  }

  remove(id: number) {
    return this.ferramentaProfissionalRepository.delete(id);
  }
}
