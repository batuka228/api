import { Test, TestingModule } from '@nestjs/testing';
import { CurrentNewsController } from './current_news.controller';

describe('CurrentNewsController', () => {
  let controller: CurrentNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentNewsController],
    }).compile();

    controller = module.get<CurrentNewsController>(CurrentNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
