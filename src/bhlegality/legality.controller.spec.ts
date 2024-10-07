import { Test, TestingModule } from '@nestjs/testing';
import { LegalityController } from './legality.controller';

describe('LegalityController', () => {
  let controller: LegalityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegalityController],
    }).compile();

    controller = module.get<LegalityController>(LegalityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
