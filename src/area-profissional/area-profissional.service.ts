import { Inject, Injectable } from '@nestjs/common';
import { CreateAreaProfissionalDto } from './dto/create-area-profissional.dto';
import { UpdateAreaProfissionalDto } from './dto/update-area-profissional.dto';
import { Repository } from 'typeorm';
import { AreaProfissional } from './entities/area-profissional.entity';

@Injectable()
export class AreaProfissionalService {

  constructor(
    @Inject('AREA_PROFISSIONAL_REPOSITORY')
    private areaProfissionalRepository: Repository<AreaProfissional>,
  ) {}

  create(createAreaProfissionalDto: CreateAreaProfissionalDto) {
    return this.areaProfissionalRepository.save(createAreaProfissionalDto);
  }

  findAll() {
    return this.areaProfissionalRepository.find();
  }

  findOne(id: number) {
    return this.areaProfissionalRepository.findOne({where: {id}});
  }

  update(id: number, updateAreaProfissionalDto: UpdateAreaProfissionalDto) {
    return this.areaProfissionalRepository.update(id, updateAreaProfissionalDto);
  }

  remove(id: number) {
    return this.areaProfissionalRepository.delete(id);
  }
}
