import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectDataSource } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    @InjectDataSource() private db: DataSource
  ) {}

  async fetchDataFromApi(url: string): Promise<any> {
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch data from API: ${error.message}`);
    }
  }

  async ensureTableExists(tableName: string) {
    try {
      await this.db.query(`
        CREATE TABLE IF NOT EXISTS ${tableName} (
          id SERIAL PRIMARY KEY,
          data JSONB NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `);
    } catch (error) {
      throw new Error(`Failed to ensure table exists: ${error.message}`);
    }
  }

  async saveOrUpdateData(tableName: string, data: any[]) {
    try {
      for (const item of data) {
        const existing = await this.db.query(`
          SELECT * FROM ${tableName} WHERE data->>'id' = $1
        `, [item.id]);

        if (existing.length > 0) {
          await this.db.query(`
            UPDATE ${tableName}
            SET data = $1, updated_at = CURRENT_TIMESTAMP
            WHERE data->>'id' = $2
          `, [item, item.id]);
        } else {
          await this.db.query(`
            INSERT INTO ${tableName} (data)
            VALUES ($1)
          `, [item]);
        }
      }
    } catch (error) {
      throw new Error(`Failed to save or update data: ${error.message}`);
    }
  }
}
