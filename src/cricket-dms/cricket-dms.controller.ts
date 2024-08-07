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
   

  // @Query('p', ParseIntPipe) page: number = 1
  @Get('continents')
  async getContinents() {
    try {
      return await this.cricketDmsService.findAll(continentsTable);
    } catch (error) {
      throw new Error(`Failed to fetch continents: ${error.message}`);
    }
  }

  @Get('continents/:id')
  async getContinent(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, continentsTable);
    } catch (error) {
      throw new Error(`Failed to find continent: ${error.message}`);
    }
  }

  @Get('countries')
  async getCountries() {
    try {
      return await this.cricketDmsService.findAll(countriesTable);
    } catch (error) {
      throw new Error(`Failed to fetch countries: ${error.message}`);
    }
  }

  @Get('countries/:id')
  async getCountry(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, countriesTable);
    } catch (error) {
      throw new Error(`Failed to find country: ${error.message}`);
    }
  }

  @Get('leagues')
  async getLeagues() {
    try {
      return await this.cricketDmsService.findAll(leaguesTable);
    } catch (error) {
      throw new Error(`Failed to fetch leagues: ${error.message}`);
    }
  }

  @Get('leagues/:id')
  async getLeague(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, leaguesTable);
    } catch (error) {
      throw new Error(`Failed to find league: ${error.message}`);
    }
  }

  @Get('seasons')
  async getSeasons() {
    try {
      return await this.cricketDmsService.findAll(seasonsTable);
    } catch (error) {
      throw new Error(`Failed to fetch seasons: ${error.message}`);
    }
  }

  @Get('seasons/:id')
  async getSeason(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, seasonsTable);
    } catch (error) {
      throw new Error(`Failed to find season: ${error.message}`);
    }
  }

  @Get('fixtures')
  async getFixtures() {
    try {
      return await this.cricketDmsService.findAll(fixturesTable);
    } catch (error) {
      throw new Error(`Failed to fetch fixtures: ${error.message}`);
    }
  }

  @Get('fixtures/:id')
  async getFixture(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, fixturesTable);
    } catch (error) {
      throw new Error(`Failed to find fixture: ${error.message}`);
    }
  }

  @Get('teams')
  async getTeams() {
    try {
      return await this.cricketDmsService.findAll(teamsTable);
    } catch (error) {
      throw new Error(`Failed to fetch teams: ${error.message}`);
    }
  }

  @Get('teams/:id')
  async getTeam(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, teamsTable);
    } catch (error) {
      throw new Error(`Failed to find team: ${error.message}`);
    }
  }

  @Get('players')
  async getPlayers() {
    try {
   
      return  await this.cricketDmsService.findAll(playersTable)
    } catch (error) {
      throw new Error(`Failed to fetch players: ${error.message}`);
    }
  }

  @Get('players/:id')
  async getPlayer(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, playersTable);
    } catch (error) {
      throw new Error(`Failed to find player: ${error.message}`);
    }
  }

  @Get('officials')
  async getOfficials() {
    try {
      return await this.cricketDmsService.findAll(officialsTable);
    } catch (error) {
      throw new Error(`Failed to fetch officials: ${error.message}`);
    }
  }

  @Get('officials/:id')
  async getOfficial(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, officialsTable);
    } catch (error) {
      throw new Error(`Failed to find official: ${error.message}`);
    }
  }

  @Get('venues')
  async getVenues() {
    try { 
      return await this.cricketDmsService.findAll(venuesTable);
    } catch (error) {
      throw new Error(`Failed to fetch venues: ${error.message}`);
    }
  }

  @Get('venues/:id')
  async getVenue(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, venuesTable);
    } catch (error) {
      throw new Error(`Failed to find venue: ${error.message}`);
    }
  }

  @Get('positions')
  async getPositions() {
    try {
      return await this.cricketDmsService.findAll(positionsTable);
    } catch (error) {
      throw new Error(`Failed to fetch positions: ${error.message}`);
    }
  }

  @Get('positions/:id')
  async getPosition(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, positionsTable);
    } catch (error) {
      throw new Error(`Failed to find position: ${error.message}`);
    }
  }

  @Get('stages')
  async getStages() {
    try {
      return await this.cricketDmsService.findAll(stagesTable);
    } catch (error) {
      throw new Error(`Failed to fetch stages: ${error.message}`);
    }
  }

  @Get('stages/:id')
  async getStage(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, stagesTable);
    } catch (error) {
      throw new Error(`Failed to find stage: ${error.message}`);
    }
  }

  @Get('rankings')
  async getRankings() {
    try {
      return await this.cricketDmsService.findAll(teamRankingsTable);
    } catch (error) {
      throw new Error(`Failed to fetch rankings: ${error.message}`);
    }
  }

  @Get('rankings/:id')
  async getRanking(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, teamRankingsTable);
    } catch (error) {
      throw new Error(`Failed to find ranking: ${error.message}`);
    }
  }

  @Get('scores')
  async getScores() {
    try {
      return await this.cricketDmsService.findAll(scoresTable);
    } catch (error) {
      throw new Error(`Failed to fetch scores: ${error.message}`);
    }
  }

  @Get('scores/:id')
  async getScore(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, scoresTable);
    } catch (error) {
      throw new Error(`Failed to find score: ${error.message}`);
    }
  }

  @Get('standings')
  async getStandings() {
    try {
      return await this.cricketDmsService.findAll(standingsSeasonTable);
    } catch (error) {
      throw new Error(`Failed to fetch standings: ${error.message}`);
    }
  }

  @Get('standings/:id')
  async getStanding(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cricketDmsService.findOne(id, standingsSeasonTable);
    } catch (error) {
      throw new Error(`Failed to find standing: ${error.message}`);
    }
  }
}
