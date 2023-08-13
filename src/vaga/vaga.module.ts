import { Module } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { VagaController } from './vaga.controller';
import { DatabaseModule } from 'src/database/database.module';
import { vagaProviders } from './vaga.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [VagaController],
  providers: [...vagaProviders, VagaService]
})
export class VagaModule {}
