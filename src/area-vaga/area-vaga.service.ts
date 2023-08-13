import { Inject, Injectable } from '@nestjs/common';
import { CreateAreaVagaDto } from './dto/create-area-vaga.dto';
import { UpdateAreaVagaDto } from './dto/update-area-vaga.dto';
import { Repository } from 'typeorm';
import { AreaVaga } from './entities/area-vaga.entity';

@Injectable()
export class AreaVagaService {

  constructor(
    @Inject('AREA_VAGA_REPOSITORY')
    private areaVagaRepository: Repository<AreaVaga>,
  ) {}

  create(createAreaVagaDto: CreateAreaVagaDto) {
    return this.areaVagaRepository.save(createAreaVagaDto);
  }

  findAll() {
    return this.areaVagaRepository.find();
  }

  findOne(id: number) {
    return this.areaVagaRepository.findOne({where: {id}});
  }

  update(id: number, updateAreaVagaDto: UpdateAreaVagaDto) {
    return this.areaVagaRepository.update(id, updateAreaVagaDto);;
  }

  remove(id: number) {
    return this.areaVagaRepository.delete(id);
  }
}
