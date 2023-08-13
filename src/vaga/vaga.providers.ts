import { DataSource } from 'typeorm';
import { Vaga } from './entities/vaga.entity';

export const vagaProviders = [
  {
    provide: 'VAGA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Vaga),
    inject: ['DATA_SOURCE'],
  },
];