// DTO ao qual representa uma safra com culturas associadas!
export class CreateHarvestDto {
  year: string;
  farmId: string;
  cropIds: string[];
}
