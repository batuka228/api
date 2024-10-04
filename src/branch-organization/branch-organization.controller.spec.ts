import { Test, TestingModule } from '@nestjs/testing';
import { BrachOrganizationController } from './branch-organization.controller';

describe('BrachOrganizationController', () => {
  let controller: BrachOrganizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrachOrganizationController],
    }).compile();

    controller = module.get<BrachOrganizationController>(
      BrachOrganizationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
