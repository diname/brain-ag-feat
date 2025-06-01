import { Crop } from './crop.entity';

export class Harvest {
  constructor(
    public readonly id: string,
    public readonly year: string,
    public readonly farmId: string,
    public crops: Crop[] = [],
  ) {
    if (!id) throw new Error('Harvest must have an id.');
    if (!year) throw new Error('Harvest must have a year.');
    if (!farmId) throw new Error('Harvest must be linked to a farm.');
  }

  addCrop(crop: Crop) {
    this.crops.push(crop);
  }

  removeCrop(cropId: string) {
    this.crops = this.crops.filter((c) => c.id !== cropId);
  }
}
