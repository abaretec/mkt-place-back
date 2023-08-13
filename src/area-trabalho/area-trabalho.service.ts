import { Inject, Injectable } from '@nestjs/common';
import { CreateAreaTrabalhoDto } from './dto/create-area-trabalho.dto';
import { UpdateAreaTrabalhoDto } from './dto/update-area-trabalho.dto';
import { Repository } from 'typeorm';
import { AreaTrabalho } from './entities/area-trabalho.entity';

@Injectable()
export class AreaTrabalhoService {

  constructor(
    @Inject('AREA_TRABALHO_REPOSITORY')
    private areaTrabalhoRepository: Repository<AreaTrabalho>,
  ) {}

  create(createAreaTrabalhoDto: CreateAreaTrabalhoDto) {
    return this.areaTrabalhoRepository.save(createAreaTrabalhoDto);
  }

  findAll() {
    return this.areaTrabalhoRepository.find();
  }

  findOne(id: number) {
    return this.areaTrabalhoRepository.findOne({where: {id}});
  }

  update(id: number, updateAreaTrabalhoDto: UpdateAreaTrabalhoDto) {
    return this.areaTrabalhoRepository.update(id, updateAreaTrabalhoDto);
  }

  remove(id: number) {
    return this.areaTrabalhoRepository.delete(id);
  }
}
