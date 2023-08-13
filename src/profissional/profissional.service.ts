import { Inject, Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { Profissional } from './entities/profissional.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfissionalService {

  constructor(
    @Inject('PROFISSIONAL_REPOSITORY')
    private profissionalRepository: Repository<Profissional>,
  ) {}

  create(createProfissionalDto: CreateProfissionalDto) {
    return this.profissionalRepository.save(createProfissionalDto);
  }

  findAll() {
    return this.profissionalRepository.find();;
  }

  findOne(id: number) {
    return this.profissionalRepository.findOne({where: {id}});
  }

  update(id: number, updateProfissionalDto: UpdateProfissionalDto) {
    return this.profissionalRepository.update(id, updateProfissionalDto);
  }

  remove(id: number) {
    return this.profissionalRepository.delete(id);
  }
}
