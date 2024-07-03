import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fetch')
  async fetchAndSave(@Query('url') url: string, @Query('apiToken') apiToken: string) {
    const apiUrl = `${url}?api_token=${apiToken}`;
    try {
      const data = await this.appService.fetchDataFromApi(apiUrl);

      if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
        throw new Error('Invalid data format or empty data');
      }

      const tableName = data.data[0].resource; 

      if (!tableName) {
        throw new Error('Resource name not found in the data');
      }

      await this.appService.ensureTableExists(tableName);
      await this.appService.saveOrUpdateData(tableName, data.data);

      return 'Data fetched and saved successfully!';
    } catch (error) {
      return `Error: ${error.message} url:${apiUrl}`;
    }
  }
}
