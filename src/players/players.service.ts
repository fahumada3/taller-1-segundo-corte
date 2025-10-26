import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private prisma: PrismaService) {}

  findByTeam(teamId: number) {
    return this.prisma.player.findMany({ where: { teamId }, orderBy: { name: 'asc' }});
  }

  async findOne(id: number) {
    const player = await this.prisma.player.findUnique({ where: { id }});
    if (!player) throw new NotFoundException('Player not found');
    return player;
  }
}