import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { CardsModule } from './cards/cards.module';
import { AuxModule } from './aux/aux.module';

@Module({
  imports: [PrismaModule, TeamsModule, PlayersModule, CardsModule, AuxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
