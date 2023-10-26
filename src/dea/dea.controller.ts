//dea.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateDeaDto } from './dto/create-dea.dto';
import { DeaService } from './dea.service';
import { Dea } from './dea.entity';
import { UpdateDeaDto } from './dto/update-dea-dto';

@Controller('dea')
export class DeaController {
  constructor(private deaService: DeaService) {}

  @Get()
  getDeas(): Promise<Dea[]> {
    return this.deaService.getDeas();
  }

  @Get(':id')
  getDea(@Param('id', ParseIntPipe) id: number): Promise<Dea> {
    return this.deaService.getDea(id);
  }

  @Post()
  createDea(@Body() newDea: CreateDeaDto): Promise<Dea> {
    return this.deaService.createDea(newDea);
  }

  @Delete(':DEA_ID')
  deleteDea(@Param('DEA_ID', ParseIntPipe) id: number) {
    return this.deaService.deleteDea(id);
  }

  @Patch(':DEA_ID')
  updateDea(
    @Param('DEA_ID', ParseIntPipe) id: number,
    @Body()
    dea: UpdateDeaDto,
  ) {
    return this.deaService.updateDea(id, dea);
  }
}
