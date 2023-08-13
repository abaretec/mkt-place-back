import { Inject, Injectable } from '@nestjs/common';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { Repository } from 'typeorm';
import { Vaga } from './entities/vaga.entity';

@Injectable()
export class VagaService {

  constructor(
    @Inject('VAGA_REPOSITORY')
    private vagaRepository: Repository<Vaga>,
  ) {}

  create(createVagaDto: CreateVagaDto) {
    return this.vagaRepository.save(createVagaDto);
  }

  findAll() {
    return this.vagaRepository.find({

    });
  }

  findOne(id: number) {
    return this.vagaRepository.findOne({where: {id}
      ,relations:[
        'areaVaga',
        'ferramentaVaga'
      ] 
    });
  }

  update(id: number, updateVagaDto: UpdateVagaDto) {
    return this.vagaRepository.update(id, updateVagaDto);
  }

  remove(id: number) {
    return this.vagaRepository.delete(id);
  }
}
