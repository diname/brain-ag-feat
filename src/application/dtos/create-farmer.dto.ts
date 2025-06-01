// DTO ao qual representa o cadastro de um produtor rural!
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateFarmerDto {
  @IsNotEmpty()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'Documento deve ser CPF (11 dígitos) ou CNPJ (14 dígitos)',
  })
  document: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
