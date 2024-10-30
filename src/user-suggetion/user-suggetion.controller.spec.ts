import { Test, TestingModule } from '@nestjs/testing';
import { UserSuggetionController } from './user-suggetion.controller';

describe('UserSuggetionController', () => {
  let controller: UserSuggetionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSuggetionController],
    }).compile();

    controller = module.get<UserSuggetionController>(UserSuggetionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
