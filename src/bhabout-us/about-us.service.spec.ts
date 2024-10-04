import { Test, TestingModule } from '@nestjs/testing';
import { BHAboutUsService } from './about-us.service';

describe('AboutUsService', () => {
  let service: BHAboutUsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BHAboutUsService],
    }).compile();

    service = module.get<BHAboutUsService>(BHAboutUsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
