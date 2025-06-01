// buscar-todas-fazendas.use-case.ts
import { Fazenda } from '@Domain/entities/fazenda.entity';
import { FazendaRepository } from '@Domain/repositories/fazenda.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BuscarTodasFazendasUseCase {
  constructor(private readonly repo: FazendaRepository) {}

  async execute(): Promise<Fazenda[]> {
    return await this.repo.buscarTodos();
  }
}
