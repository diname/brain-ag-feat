import { Safra } from '@Domain/entities/safra.entity';
import { SafraRepository } from '@Domain/repositories/safra.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BuscarTodasSafrasUseCase {
  constructor(private readonly repo: SafraRepository) {}

  async execute(): Promise<Safra[]> {
    return await this.repo.buscar();
  }
}
