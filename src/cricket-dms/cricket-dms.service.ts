import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CricketDm } from './entities/cricket-dm.entity';

@Injectable()
export class CricketDmsService {
  constructor(@InjectDataSource() private readonly db: DataSource) {}

  private getRepo(tableName: string): Repository<CricketDm> {
    return this.db.getRepository(CricketDm).extend({
      target: Object.assign({}, CricketDm, { name: tableName }),
    });
  }

  async findAll(tableName: string, page: number = 1): Promise<CricketDm[]> {
    const dataPerPage = 10;
    const skip = (page - 1) * dataPerPage;

    const repo = this.getRepo(tableName);
    const objs = await repo.find({
      take: dataPerPage,
      skip,
    });

    if (!objs.length) {
      throw new NotFoundException('No records found');
    }

    return objs;
  }

  async findOne(id: number, tableName: string): Promise<CricketDm> {
    const repo = this.getRepo(tableName);
    const obj = await repo.findOne({ where: { id } });

    if (!obj) {
      throw new NotFoundException(`${tableName} not found!`);
    }

    return obj;
  }
}
