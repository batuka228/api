import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from 'src/lib/interfaces';
describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;
  const User = {
    name: String,
    email: String,
    password: String,
  };
  const mockUserService = {
    create: jest.fn().mockResolvedValue(User),
    updateUser: jest.fn().mockResolvedValue({ ...User, name: 'batuka' }),
    deleteUser: jest.fn().mockResolvedValue(undefined),
    findAll: jest.fn().mockResolvedValue([User]),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUserService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
