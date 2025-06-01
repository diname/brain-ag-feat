import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFarmDto } from '../../../application/dtos/create-farm.dto';
import { FarmService } from '../services/farm.service';

@Controller('farms')
export class FarmController {
  constructor(private readonly farmService: FarmService) {}

  @Post()
  async create(@Body() body: CreateFarmDto) {
    return this.farmService.create(body);
  }

  @Get('by-farmer/:farmerId')
  async getByFarmerId(@Param('farmerId') farmerId: string) {
    return this.farmService.getByFarmerId(farmerId);
  }
}
