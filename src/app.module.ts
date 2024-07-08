import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { CricketDmsModule } from './cricket-dms/cricket-dms.module';


@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'CricketDms',
      synchronize: true,
      entities: [],
     }),
     HttpModule,
     CricketDmsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
