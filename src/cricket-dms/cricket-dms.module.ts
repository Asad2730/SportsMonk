import { Module } from '@nestjs/common';
import { CricketDmsService } from './cricket-dms.service';
import { CricketDmsController } from './cricket-dms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CricketDm } from './entities/cricket-dm.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([CricketDm]),
  ],
  controllers: [CricketDmsController],
  providers: [CricketDmsService],
})
export class CricketDmsModule {}
