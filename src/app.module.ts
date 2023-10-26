import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeaModule } from './dea/dea.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dea } from './dea/dea.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'eternidad2680',
      username: 'postgres',
      database: 'test',
      entities: [Dea],
      synchronize: true,
      logging: true,
    }),
    DeaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
