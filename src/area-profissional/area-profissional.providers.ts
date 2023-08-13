import { DataSource } from 'typeorm';
import { AreaProfissional } from './entities/area-profissional.entity';

export const areaProfissionalProviders = [
  {
    provide: 'AREA_PROFISSIONAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AreaProfissional),
    inject: ['DATA_SOURCE'],
  },
];