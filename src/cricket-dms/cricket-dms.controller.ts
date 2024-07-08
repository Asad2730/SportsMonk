import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CricketDmsService } from './cricket-dms.service';
import { 
  continentsTable, countriesTable, leaguesTable, seasonsTable, fixturesTable,
  teamsTable, playersTable, officialsTable, venuesTable, positionsTable,
  stagesTable, teamRankingsTable, scoresTable, standingsSeasonTable
} from '../Data/tables/names';

@Controller('cricket-dms')
export class CricketDmsController {
  constructor(private readonly cricketDmsService: CricketDmsService) {}

  @Get('continents')
  async getContinents(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(continentsTable, page);
  }

  @Get('continents/:id')
  async getContinent(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, continentsTable);
  }

  @Get('countries')
  async getCountries(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(countriesTable, page);
  }

  @Get('countries/:id')
  async getCountry(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, countriesTable);
  }

  @Get('leagues')
  async getLeagues(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(leaguesTable, page);
  }

  @Get('leagues/:id')
  async getLeague(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, leaguesTable);
  }

  @Get('seasons')
  async getSeasons(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(seasonsTable, page);
  }

  @Get('seasons/:id')
  async getSeason(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, seasonsTable);
  }

  @Get('fixtures')
  async getFixtures(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(fixturesTable, page);
  }

  @Get('fixtures/:id')
  async getFixture(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, fixturesTable);
  }

  @Get('teams')
  async getTeams(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(teamsTable, page);
  }

  @Get('teams/:id')
  async getTeam(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, teamsTable);
  }

  @Get('players')
  async getPlayers(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(playersTable, page);
  }

  @Get('players/:id')
  async getPlayer(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, playersTable);
  }

  @Get('officials')
  async getOfficials(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(officialsTable, page);
  }

  @Get('officials/:id')
  async getOfficial(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, officialsTable);
  }

  @Get('venues')
  async getVenues(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(venuesTable, page);
  }

  @Get('venues/:id')
  async getVenue(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, venuesTable);
  }

  @Get('positions')
  async getPositions(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(positionsTable, page);
  }

  @Get('positions/:id')
  async getPosition(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, positionsTable);
  }

  @Get('stages')
  async getStages(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(stagesTable, page);
  }

  @Get('stages/:id')
  async getStage(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, stagesTable);
  }

  @Get('rankings')
  async getRankings(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(teamRankingsTable, page);
  }

  @Get('rankings/:id')
  async getRanking(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, teamRankingsTable);
  }

  @Get('scores')
  async getScores(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(scoresTable, page);
  }

  @Get('scores/:id')
  async getScore(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, scoresTable);
  }

  @Get('standings')
  async getStandings(@Query('p', ParseIntPipe) page: number = 1) {
    return await this.cricketDmsService.findAll(standingsSeasonTable, page);
  }

  @Get('standings/:id')
  async getStanding(@Param('id', ParseIntPipe) id: number) {
    return this.cricketDmsService.findOne(id, standingsSeasonTable);
  }
}
