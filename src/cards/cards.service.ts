import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.card.findMany({ include: { type: true, originCity: true }});
  }

  async findOne(id: number) {
    const card = await this.prisma.card.findUnique({ where: { id }, include: { type: true, originCity: true }});
    if (!card) throw new NotFoundException('Card not found');
    return card;
  }
}