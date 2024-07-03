import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':url')
  async fetchAndSave(@Param('url') url: string) {
    try {
      const data = await this.appService.fetchDataFromApi(url);
      const tableName = data.resource;
      await this.appService.ensureTableExists(tableName);
      await this.appService.saveOrUpdateData(tableName, data.data);
      return 'Data fetched and saved successfully!';
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}
