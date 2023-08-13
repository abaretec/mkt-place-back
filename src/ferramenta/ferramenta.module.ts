import { Module } from '@nestjs/common';
import { FerramentaService } from './ferramenta.service';
import { FerramentaController } from './ferramenta.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ferramentaProviders } from './ferramenta.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [FerramentaController],
  providers: [...ferramentaProviders,FerramentaService]
})
export class FerramentaModule {}
