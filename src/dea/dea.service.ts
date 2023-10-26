//dea.service.ts
import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Dea } from './dea.entity';
import { CreateDeaDto } from './dto/create-dea.dto';

@Injectable()
export class DeaService {
    constructor(@InjectRepository(Dea) private deaRepository:Repository<Dea>){}

    createDea(dea:CreateDeaDto){
     const newDea = this.deaRepository.create(dea);
     return this.deaRepository.save(newDea);
    }
}