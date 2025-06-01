// criar-fazenda.use-case.ts
import { Fazenda } from '@Domain/entities/fazenda.entity';
import { FazendaRepository } from '@Domain/repositories/fazenda.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CriarFazendaUseCase {
  constructor(private readonly repo: FazendaRepository) {}

  async execute(dados: Fazenda): Promise<Fazenda> {
    return await this.repo.criar(dados);
  }
}
