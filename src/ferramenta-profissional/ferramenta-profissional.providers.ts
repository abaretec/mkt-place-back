import { DataSource } from 'typeorm';
import { FerramentaProfissional } from './entities/ferramenta-profissional.entity';

export const ferramentaProfissionalProviders = [
  {
    provide: 'FERRAMENTA_PROFISSIONAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(FerramentaProfissional),
    inject: ['DATA_SOURCE'],
  },
];