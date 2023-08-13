import { DataSource } from 'typeorm';
import { AreaVaga } from './entities/area-vaga.entity';

export const areaVagaProviders = [
  {
    provide: 'AREA_VAGA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AreaVaga),
    inject: ['DATA_SOURCE'],
  },
];