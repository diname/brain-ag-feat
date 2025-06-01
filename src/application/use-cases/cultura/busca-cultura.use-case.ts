// buscar-todas-culturas.use-case.ts
import { Cultura } from '@Domain/entities/cultura.entity';
import { CulturaRepository } from '@Domain/repositories/cultura.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BuscarTodasCulturasUseCase {
  constructor(private readonly repo: CulturaRepository) {}

  async execute(): Promise<Cultura[]> {
    return await this.repo.buscarTodos();
  }
}
