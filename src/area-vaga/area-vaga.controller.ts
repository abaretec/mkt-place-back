import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AreaVagaService } from './area-vaga.service';
import { CreateAreaVagaDto } from './dto/create-area-vaga.dto';
import { UpdateAreaVagaDto } from './dto/update-area-vaga.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('area-vaga')
export class AreaVagaController {
  constructor(private readonly areaVagaService: AreaVagaService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Body() createAreaVagaDto: CreateAreaVagaDto) {
    return this.areaVagaService.create(createAreaVagaDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.areaVagaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.areaVagaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateAreaVagaDto: UpdateAreaVagaDto) {
    return this.areaVagaService.update(+id, updateAreaVagaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.areaVagaService.remove(+id);
  }
}
