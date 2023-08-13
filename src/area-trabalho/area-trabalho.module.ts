import { Module } from '@nestjs/common';
import { AreaTrabalhoService } from './area-trabalho.service';
import { AreaTrabalhoController } from './area-trabalho.controller';
import { DatabaseModule } from 'src/database/database.module';
import { areaTrabalhoProviders } from './area-trabalho.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [AreaTrabalhoController],
  providers: [...areaTrabalhoProviders,AreaTrabalhoService]
})
export class AreaTrabalhoModule {}
