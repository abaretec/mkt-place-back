import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AreaProfissionalService } from './area-profissional.service';
import { CreateAreaProfissionalDto } from './dto/create-area-profissional.dto';
import { UpdateAreaProfissionalDto } from './dto/update-area-profissional.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('area-profissional')
export class AreaProfissionalController {
  constructor(private readonly areaProfissionalService: AreaProfissionalService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Body() createAreaProfissionalDto: CreateAreaProfissionalDto) {
    return this.areaProfissionalService.create(createAreaProfissionalDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.areaProfissionalService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.areaProfissionalService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateAreaProfissionalDto: UpdateAreaProfissionalDto) {
    return this.areaProfissionalService.update(+id, updateAreaProfissionalDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.areaProfissionalService.remove(+id);
  }
}
