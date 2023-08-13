import { DataSource } from 'typeorm';
import { FerramentaVaga } from './entities/ferramenta-vaga.entity';

export const ferramentaVagaProviders = [
  {
    provide: 'FERRAMENTA_VAGA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(FerramentaVaga),
    inject: ['DATA_SOURCE'],
  },
];