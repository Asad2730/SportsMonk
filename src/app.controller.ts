import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { urls ,auth} from './Data/fetchDataUrls';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sync_continents')
  async syncContinents() {
    const apiUrl = `${urls.continents}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_countries')
  async syncCountries() {
    const apiUrl = `${urls.countries}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_leagues')
  async syncLeagues() {
    const apiUrl = `${urls.leagues}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }


  @Get('sync_seasons')
  async syncSeasons() {
    const apiUrl = `${urls.seasons}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixtures')
  async syncFixtures() {
    const apiUrl = `${urls.fixtures}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_teams')
  async syncTeams() {
    const apiUrl = `${urls.teams}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_players')
  async syncPlayers() {
    const apiUrl = `${urls.players}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_officials')
  async syncOfficials() {
    const apiUrl = `${urls.officials}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_venues')
  async syncVenues() {
    const apiUrl = `${urls.venues}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_positions')
  async syncPositions() {
    const apiUrl = `${urls.positions}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_stages')
  async syncStages() {
    const apiUrl = `${urls.stages}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

//voilates null contraints
//null value in column "id" of relation
  @Get('sync_team_rankings')
  async syncTeamRankings() {
    const apiUrl = `${urls.team_rankings}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_standings_season')
  async syncStandingsSeason() {
    const apiUrl = `${urls.standings_season}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_standings_stage')
  async syncStandingsStage() {
    const apiUrl = `${urls.standings_stage}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

//...........

  @Get('sync_scores')
  async syncScores() {
    const apiUrl = `${urls.scores}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }


  //Error: Failed to fetch data from API: Request failed with status code 401
  //aunAuth with current tokken
  @Get('sync_fixture_bowling')
  async syncFixtureBowling() {
    const apiUrl = `${urls.fixture_bowling}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_batting')
  async syncFixtureBatting() {
    const apiUrl = `${urls.fixture_batting}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_runs')
  async syncFixtureRuns() {
    const apiUrl = `${urls.fixture_runs}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_lineup')
  async syncFixtureLineup() {
    const apiUrl = `${urls.fixture_lineup}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_balls')
  async syncFixtureBalls() {
    const apiUrl = `${urls.fixture_balls}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_referee')
  async syncFixtureReferee() {
    const apiUrl = `${urls.fixture_referee}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_firstumpire')
  async syncFixtureFirstUmpire() {
    const apiUrl = `${urls.fixture_firstumpire}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_secondumpire')
  async syncFixtureSecondUmpire() {
    const apiUrl = `${urls.fixture_secondumpire}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_tvumpire')
  async syncFixtureTVUmpire() {
    const apiUrl = `${urls.fixture_tvumpire}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_winnerteam')
  async syncFixtureWinnerTeam() {
    const apiUrl = `${urls.fixture_winnerteam}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_tosswon')
  async syncFixtureTossWon() {
    const apiUrl = `${urls.fixture_tosswon}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_manofmatch')
  async syncFixtureManOfMatch() {
    const apiUrl = `${urls.fixture_manofmatch}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_fixture_manofseries')
  async syncFixtureManOfSeries() {
    const apiUrl = `${urls.fixture_manofseries}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  @Get('sync_player_career')
  async syncPlayerCareer() {
    const apiUrl = `${urls.player_career}?api_token=${auth}`;
    try {
      const result = await this.appService.syncData(apiUrl);
      return result;
    } catch (error) {
      return error.message;
    }
  }

  //....//
}

