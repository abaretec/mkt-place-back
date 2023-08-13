import { Module } from '@nestjs/common';
import { FerramentaProfissionalService } from './ferramenta-profissional.service';
import { FerramentaProfissionalController } from './ferramenta-profissional.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ferramentaProfissionalProviders } from './ferramenta-profissional.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [FerramentaProfissionalController],
  providers: [...ferramentaProfissionalProviders, FerramentaProfissionalService]
})
export class FerramentaProfissionalModule {}
