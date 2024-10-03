import { Test, TestingModule } from '@nestjs/testing';
import { BrachOrganizationService } from './brach-organization.service';

describe('BrachOrganizationService', () => {
  let service: BrachOrganizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrachOrganizationService],
    }).compile();

    service = module.get<BrachOrganizationService>(BrachOrganizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
