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
  ) { }

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
      await this.db.query(`CREATE TABLE IF NOT EXISTS ${tableName} ( 
          id INT PRIMARY KEY,
          data JSONB NOT NULL)`
      );
    } catch (error) {
      throw new Error(`Failed to ensure table exists: ${error.message}`);
    }
  }

  async upsert(tableName: string, data: any[]) {
    try {
      for (const item of data) {
        await this.db.query(`INSERT INTO ${tableName} 
        (id,data) VALUES ($1,$2) ON CONFLICT (id) DO NOTHING`,
          [item.id, item]);
      }
    } catch (error) {
      throw new Error(`Failed to save or update data: ${error.message}`);
    }
  }

  async syncData(apiUrl: string): Promise<String> {
    try {
      const data = await this.fetchDataFromApi(apiUrl);
      if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
        throw new Error('Invalid data format or empty data');
      }
      const tableName = data.data[0].resource;
      if (!tableName) {
        throw new Error('Resource name not found in the data');
      }
      await this.ensureTableExists(tableName);
      await this.upsert(tableName, data.data);
      return 'Data fetched and synced!';
    } catch (error) {
      return `Error: ${error.message} url:${apiUrl}`;
    }


  }

}
