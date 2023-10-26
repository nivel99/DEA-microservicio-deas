import { Test, TestingModule } from '@nestjs/testing';
import { DeaController } from './dea.controller';

describe('DeaController', () => {
  let controller: DeaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeaController],
    }).compile();

    controller = module.get<DeaController>(DeaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
