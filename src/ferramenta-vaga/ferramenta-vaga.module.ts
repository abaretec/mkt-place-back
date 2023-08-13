import { Module } from '@nestjs/common';
import { FerramentaVagaService } from './ferramenta-vaga.service';
import { FerramentaVagaController } from './ferramenta-vaga.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ferramentaVagaProviders } from './ferramenta-vaga.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [FerramentaVagaController],
  providers: [...ferramentaVagaProviders, FerramentaVagaService]
})
export class FerramentaVagaModule {}
