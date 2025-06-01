// DTO ao qual representa o cadastro de uma fazenda vinculada a um produtor
export class CreateFarmDto {
  name: string;
  city: string;
  state: string;
  totalArea: number;
  agriculturalArea: number;
  vegetationArea: number;
  farmerId: string;
}
