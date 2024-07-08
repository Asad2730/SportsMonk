import { Test, TestingModule } from '@nestjs/testing';
import { CricketDmsService } from './cricket-dms.service';

describe('CricketDmsService', () => {
  let service: CricketDmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CricketDmsService],
    }).compile();

    service = module.get<CricketDmsService>(CricketDmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
