import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const fuego = await prisma.type.upsert({ where: { name: 'Fuego' }, update: {}, create: { name: 'Fuego' }});
  const aire = await prisma.type.upsert({ where: { name: 'Aire' }, update: {}, create: { name: 'Aire' }});

  const bogota = await prisma.city.upsert({ where: { name: 'Bogotá' }, update: {}, create: { name: 'Bogotá', country: 'Colombia' }});

  await prisma.card.create({
    data: {
      name: 'Inferno Knight',
      powerLevel: 90,
      imageUrl: 'https://example.com/inferno.png',
      typeId: fuego.id,
      originCityId: bogota.id,
    },
  });

  const argentina = await prisma.team.upsert({
    where: { country: 'Argentina' },
    update: {},
    create: { country: 'Argentina', confederation: 'CONMEBOL', worldTitles: 3, badgeUrl: 'https://example.com/arg.png' }
  });

  const mexico = await prisma.team.upsert({
    where: { country: 'Mexico' },
    update: {},
    create: { country: 'Mexico', confederation: 'CONCACAF', worldTitles: 0, badgeUrl: 'https://example.com/mex.png' }
  });

  await prisma.player.create({
    data: {
      name: 'Lionel Messi',
      age: 36,
      imageUrl: 'https://example.com/messi.png',
      dribling: 95,
      speed: 85,
      dribble: 96,
      stats: { goals: 700 },
      teamId: argentina.id,
    },
  });

  await prisma.player.create({
    data: {
      name: 'Jugador Ejemplo',
      age: 24,
      imageUrl: 'https://example.com/juan.png',
      dribling: 80,
      speed: 82,
      dribble: 79,
      stats: { goals: 5 },
      teamId: mexico.id,
    },
  });

  console.log('Seed completed');
}

main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });