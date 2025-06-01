import { Body, Controller, Post } from '@nestjs/common';
import { CreateFarmerDto } from '../../../application/dtos/create-farmer.dto';
import { FarmerService } from '../services/farmer.service';

@Controller('farmers')
export class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}

  @Post()
  async create(@Body() body: CreateFarmerDto) {
    return this.farmerService.create(body);
  }
}
