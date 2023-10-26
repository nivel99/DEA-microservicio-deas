//dea.module.ts
import { Module } from '@nestjs/common';
import { DeaController } from './dea.controller';
import { DeaService } from './dea.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dea } from './dea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dea])],
  controllers: [DeaController],
  providers: [DeaService]
})
export class DeaModule {}
