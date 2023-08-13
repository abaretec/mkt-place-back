import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AreaTrabalhoService } from './area-trabalho.service';
import { CreateAreaTrabalhoDto } from './dto/create-area-trabalho.dto';
import { UpdateAreaTrabalhoDto } from './dto/update-area-trabalho.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('area-trabalho')
export class AreaTrabalhoController {
  constructor(private readonly areaTrabalhoService: AreaTrabalhoService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Body() createAreaTrabalhoDto: CreateAreaTrabalhoDto) {
    return this.areaTrabalhoService.create(createAreaTrabalhoDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.areaTrabalhoService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.areaTrabalhoService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateAreaTrabalhoDto: UpdateAreaTrabalhoDto) {
    return this.areaTrabalhoService.update(+id, updateAreaTrabalhoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.areaTrabalhoService.remove(+id);
  }
}
