import { Inject, Injectable } from '@nestjs/common';
import { CreateAgenciaDto } from './dto/create-agencia.dto';
import { UpdateAgenciaDto } from './dto/update-agencia.dto';
import { Repository } from 'typeorm';
import { Agencia } from './entities/agencia.entity';

@Injectable()
export class AgenciaService {

  constructor(
    @Inject('AGENCIA_REPOSITORY')
    private agenciaRepository: Repository<Agencia>,
  ) {}

  create(createAgenciaDto: CreateAgenciaDto) {
    return this.agenciaRepository.save(createAgenciaDto);
  }

  findAll() {
    return this.agenciaRepository.find();;
  }

  findOne(id: number) {
    return this.agenciaRepository.findOne({where: {id}});
  }

  update(id: number, updateAgenciaDto: UpdateAgenciaDto) {
    return this.agenciaRepository.update(id, updateAgenciaDto);
  }

  remove(id: number) {
    return this.agenciaRepository.delete(id);
  }
}
