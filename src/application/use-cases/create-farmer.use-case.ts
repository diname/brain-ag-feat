import { randomUUID } from 'crypto';
import { Farmer } from '../../domain/entities/farmer.entity';
import { IFarmerRepository } from '../../domain/repositories/farmer.repository.interface';
import { isValidCpfCnpj } from '../../shared/utils/cpf-cnpj-validator';
import { CreateFarmerDto } from '../dtos/create-farmer.dto';

export class CreateFarmerUseCase {
  constructor(private readonly farmerRepository: IFarmerRepository) {}

  async execute(input: CreateFarmerDto): Promise<Farmer> {
    if (!isValidCpfCnpj(input.document)) {
      throw new Error('Documento CPF ou CNPJ inválido');
    }

    const farmer = new Farmer(randomUUID(), input.document, input.name);
    return this.farmerRepository.create(farmer);
  }
}
