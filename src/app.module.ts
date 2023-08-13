import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from './cliente/cliente.module';
import { AreaTrabalhoModule } from './area-trabalho/area-trabalho.module';
import { FerramentaModule } from './ferramenta/ferramenta.module';
import { ProfissionalModule } from './profissional/profissional.module';
import { AgenciaModule } from './agencia/agencia.module';
import { VagaModule } from './vaga/vaga.module';
import { AreaProfissionalModule } from './area-profissional/area-profissional.module';
import { FerramentaProfissionalModule } from './ferramenta-profissional/ferramenta-profissional.module';
import { AreaVagaModule } from './area-vaga/area-vaga.module';
import { FerramentaVagaModule } from './ferramenta-vaga/ferramenta-vaga.module';

@Module({
  imports: [
    UsuarioModule, 
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    ClienteModule,
    AreaTrabalhoModule,
    FerramentaModule,
    ProfissionalModule,
    AgenciaModule,
    VagaModule,
    AreaProfissionalModule,
    FerramentaProfissionalModule,
    AreaVagaModule,
    FerramentaVagaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
