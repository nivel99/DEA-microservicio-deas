import { Test, TestingModule } from '@nestjs/testing';
import { DeaService } from './dea.service';

describe('DeaService', () => {
  let service: DeaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeaService],
    }).compile();

    service = module.get<DeaService>(DeaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
