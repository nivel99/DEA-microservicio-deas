//dea.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dea } from './dea.entity';
import { CreateDeaDto } from './dto/create-dea.dto';

@Injectable()
export class DeaService {
  constructor(@InjectRepository(Dea) private deaRepository: Repository<Dea>) {}

  createDea(dea: CreateDeaDto) {
    const newDea = this.deaRepository.create(dea);
    return this.deaRepository.save(newDea);
  }

  getDeas() {
    return this.deaRepository.find();
  }

  getDea(id: number) {
    return this.deaRepository.findOne({
      where: {
        DEA_ID: id,
      },
    });
  }

  deleteDea(DEA_ID: number) {
    return this.deaRepository.delete({ DEA_ID });
  }
}
