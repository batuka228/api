import { Test, TestingModule } from '@nestjs/testing';
import { UserSuggetionService } from './user-suggetion.service';

describe('UserSuggetionService', () => {
  let service: UserSuggetionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSuggetionService],
    }).compile();

    service = module.get<UserSuggetionService>(UserSuggetionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
