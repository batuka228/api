import { Test, TestingModule } from '@nestjs/testing';
import { LegalityService } from './legality.service';

describe('LegalityService', () => {
  let service: LegalityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegalityService],
    }).compile();

    service = module.get<LegalityService>(LegalityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
