import { DataSource } from 'typeorm';
import { Profissional } from './entities/profissional.entity';

export const profissionalProviders = [
  {
    provide: 'PROFISSIONAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Profissional),
    inject: ['DATA_SOURCE'],
  },
];