import { Controller, Get, Param } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('api/v1/cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  all() { return this.cardsService.findAll(); }

  @Get(':id')
  one(@Param('id') id: string) { return this.cardsService.findOne(Number(id)); }
}