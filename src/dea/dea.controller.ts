//dea.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateDeaDto } from './dto/create-dea.dto';
import { DeaService } from './dea.service';

@Controller('dea')
export class DeaController {

    constructor(private deaService:DeaService){}

    @Post()
    createDea(@Body() newDea: CreateDeaDto){
     return this.deaService.createDea(newDea)
    }
}
