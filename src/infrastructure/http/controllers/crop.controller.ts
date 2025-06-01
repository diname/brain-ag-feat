import { Body, Controller, Post } from '@nestjs/common';
import { CreateCropDto } from '../../../application/dtos/create-crop.dto';
import { CropService } from '../services/crop.service';

@Controller('crops')
export class CropController {
  constructor(private readonly cropService: CropService) {}

  @Post()
  async create(@Body() body: CreateCropDto) {
    return this.cropService.create(body);
  }
}
