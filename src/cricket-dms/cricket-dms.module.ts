import { Module } from '@nestjs/common';
import { CricketDmsService } from './cricket-dms.service';
import { CricketDmsController } from './cricket-dms.controller';




@Module({
  imports:[
    //  TypeOrmModule.forFeature([CricketDm]), // Register the generic entity here
  ],
  controllers: [CricketDmsController],
  providers: [CricketDmsService],
})
export class CricketDmsModule {}
