import { Test, TestingModule } from '@nestjs/testing';
import { VideoNewsService } from './video_news.service';

describe('VideoNewsService', () => {
  let service: VideoNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoNewsService],
    }).compile();

    service = module.get<VideoNewsService>(VideoNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
