import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHarvestDto } from '../../../application/dtos/create-harvest.dto';
import { HarvestService } from '../services/harvest.service';

@Controller('harvests')
export class HarvestController {
  constructor(private readonly harvestService: HarvestService) {}

  @Post()
  async create(@Body() body: CreateHarvestDto) {
    return this.harvestService.create(body);
  }

  @Get('by-farm/:farmId')
  async getByFarmId(@Param('farmId') farmId: string) {
    return this.harvestService.getByFarmId(farmId);
  }
}
