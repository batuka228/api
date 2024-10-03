import { Test, TestingModule } from '@nestjs/testing';
import { VideoNewsController } from './video_news.controller';

describe('VideoNewsController', () => {
  let controller: VideoNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoNewsController],
    }).compile();

    controller = module.get<VideoNewsController>(VideoNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
