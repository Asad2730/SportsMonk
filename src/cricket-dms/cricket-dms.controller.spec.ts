import { Test, TestingModule } from '@nestjs/testing';
import { CricketDmsController } from './cricket-dms.controller';
import { CricketDmsService } from './cricket-dms.service';

describe('CricketDmsController', () => {
  let controller: CricketDmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CricketDmsController],
      providers: [CricketDmsService],
    }).compile();

    controller = module.get<CricketDmsController>(CricketDmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
