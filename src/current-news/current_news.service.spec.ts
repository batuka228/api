import { Test, TestingModule } from '@nestjs/testing';
import { CurrentNewsService } from './current_news.service';

describe('CurrentNewsService', () => {
  let service: CurrentNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrentNewsService],
    }).compile();

    service = module.get<CurrentNewsService>(CurrentNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
