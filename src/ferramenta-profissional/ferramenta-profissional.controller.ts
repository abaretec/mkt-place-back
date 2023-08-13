import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { FerramentaProfissionalService } from './ferramenta-profissional.service';
import { CreateFerramentaProfissionalDto } from './dto/create-ferramenta-profissional.dto';
import { UpdateFerramentaProfissionalDto } from './dto/update-ferramenta-profissional.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('ferramenta-profissional')
export class FerramentaProfissionalController {
  constructor(private readonly ferramentaProfissionalService: FerramentaProfissionalService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Body() createFerramentaProfissionalDto: CreateFerramentaProfissionalDto) {
    return this.ferramentaProfissionalService.create(createFerramentaProfissionalDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.ferramentaProfissionalService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.ferramentaProfissionalService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateFerramentaProfissionalDto: UpdateFerramentaProfissionalDto) {
    return this.ferramentaProfissionalService.update(+id, updateFerramentaProfissionalDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.ferramentaProfissionalService.remove(+id);
  }
}
