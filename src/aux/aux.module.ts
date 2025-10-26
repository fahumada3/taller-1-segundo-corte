import { Module } from '@nestjs/common';
import { AuxController } from './aux.controller';
import { AuxService } from './aux.service';

@Module({
  controllers: [AuxController],
  providers: [AuxService]
})
export class AuxModule {}
