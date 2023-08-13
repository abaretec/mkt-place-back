import { Module } from '@nestjs/common';
import { AgenciaService } from './agencia.service';
import { AgenciaController } from './agencia.controller';
import { DatabaseModule } from 'src/database/database.module';
import { agenciaProviders } from './agencia.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [AgenciaController],
  providers: [...agenciaProviders,AgenciaService]
})
export class AgenciaModule {}
