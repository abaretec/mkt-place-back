import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { FerramentaService } from './ferramenta.service';
import { CreateFerramentaDto } from './dto/create-ferramenta.dto';
import { UpdateFerramentaDto } from './dto/update-ferramenta.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('ferramenta')
export class FerramentaController {
  constructor(private readonly ferramentaService: FerramentaService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  create(@Body() createFerramentaDto: CreateFerramentaDto) {
    return this.ferramentaService.create(createFerramentaDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.ferramentaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.ferramentaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateFerramentaDto: UpdateFerramentaDto) {
    return this.ferramentaService.update(+id, updateFerramentaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.ferramentaService.remove(+id);
  }
}
