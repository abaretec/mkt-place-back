import { DataSource } from 'typeorm';
import { Agencia } from './entities/agencia.entity';

export const agenciaProviders = [
  {
    provide: 'AGENCIA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Agencia),
    inject: ['DATA_SOURCE'],
  },
];