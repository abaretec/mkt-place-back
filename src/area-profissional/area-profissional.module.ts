import { Module } from '@nestjs/common';
import { AreaProfissionalService } from './area-profissional.service';
import { AreaProfissionalController } from './area-profissional.controller';
import { DatabaseModule } from 'src/database/database.module';
import { areaProfissionalProviders } from './area-profissional.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [AreaProfissionalController],
  providers: [...areaProfissionalProviders, AreaProfissionalService]
})
export class AreaProfissionalModule {}
