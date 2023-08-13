import { Module } from '@nestjs/common';
import { ProfissionalService } from './profissional.service';
import { ProfissionalController } from './profissional.controller';
import { DatabaseModule } from 'src/database/database.module';
import { profissionalProviders } from './profissional.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [ProfissionalController],
  providers: [...profissionalProviders,ProfissionalService]
})
export class ProfissionalModule {}
