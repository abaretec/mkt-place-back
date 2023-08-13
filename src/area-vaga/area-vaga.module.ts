import { Module } from '@nestjs/common';
import { AreaVagaService } from './area-vaga.service';
import { AreaVagaController } from './area-vaga.controller';
import { DatabaseModule } from 'src/database/database.module';
import { areaVagaProviders } from './area-vaga.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [AreaVagaController],
  providers: [...areaVagaProviders,AreaVagaService]
})
export class AreaVagaModule {}
