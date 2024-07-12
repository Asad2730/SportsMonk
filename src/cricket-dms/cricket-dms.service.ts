import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CricketDm } from './entities/cricket-dm.entity';

@Injectable()
export class CricketDmsService {
  constructor(@InjectDataSource() private readonly db: DataSource) {}


  async findAll(tableName: string, page: number = 1): Promise<CricketDm[]> {
    const dataPerPage = 100;
    const skip = (page - 1) * dataPerPage;
    const query = `SELECT * FROM ${tableName} LIMIT ${dataPerPage} OFFSET ${skip}`;
    const objs = await this.db.query(query);
    if (!objs.length) {
      throw new NotFoundException('No records found');
    }

    return objs;
  }

  async findOne(id: number, tableName: string): Promise<CricketDm> {
    const query = `SELECT * FROM ${tableName}WHERE id = $1`;
    const obj = await this.db.query(query,[id])

    if (!obj) {
      throw new NotFoundException(`${tableName} not found!`);
    }

    return obj;
  }
}
