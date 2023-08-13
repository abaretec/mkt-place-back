import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { FerramentaVagaService } from './ferramenta-vaga.service';
import { CreateFerramentaVagaDto } from './dto/create-ferramenta-vaga.dto';
import { UpdateFerramentaVagaDto } from './dto/update-ferramenta-vaga.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('ferramenta-vaga')
export class FerramentaVagaController {
  constructor(private readonly ferramentaVagaService: FerramentaVagaService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Body() createFerramentaVagaDto: CreateFerramentaVagaDto) {
    return this.ferramentaVagaService.create(createFerramentaVagaDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.ferramentaVagaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.ferramentaVagaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateFerramentaVagaDto: UpdateFerramentaVagaDto) {
    return this.ferramentaVagaService.update(+id, updateFerramentaVagaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.ferramentaVagaService.remove(+id);
  }
}
