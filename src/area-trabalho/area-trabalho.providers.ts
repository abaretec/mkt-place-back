import { DataSource } from 'typeorm';
import { AreaTrabalho } from './entities/area-trabalho.entity';

export const areaTrabalhoProviders = [
  {
    provide: 'AREA_TRABALHO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AreaTrabalho),
    inject: ['DATA_SOURCE'],
  },
];