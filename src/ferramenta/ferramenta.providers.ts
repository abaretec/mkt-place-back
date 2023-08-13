import { DataSource } from 'typeorm';
import { Ferramenta } from './entities/ferramenta.entity';

export const ferramentaProviders = [
  {
    provide: 'FERRAMENTA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Ferramenta),
    inject: ['DATA_SOURCE'],
  },
];