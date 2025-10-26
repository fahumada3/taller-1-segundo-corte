import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get('team/:teamId')
  getByTeam(@Param('teamId') teamId: string) {
    return this.playersService.findByTeam(Number(teamId));
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.playersService.findOne(Number(id));
  }
}