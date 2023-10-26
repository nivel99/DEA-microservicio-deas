//dea.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateDeaDto } from './dto/create-dea.dto';
import { DeaService } from './dea.service';

@Controller('dea')
export class DeaController {

    constructor(private deaService:DeaService){}

    @Get()
    getDeas(){
        return this.deaService.getDeas();
    }

    @Post()
    createDea(@Body() newDea: CreateDeaDto){
     return this.deaService.createDea(newDea)
    }
}
