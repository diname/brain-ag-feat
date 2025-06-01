// criar-cultura.use-case.ts
import { Cultura } from '@Domain/entities/cultura.entity';
import { CulturaRepository } from '@Domain/repositories/cultura.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CriarCulturaUseCase {
  constructor(private readonly repo: CulturaRepository) {}

  async execute(dados: Cultura): Promise<Cultura> {
    return await this.repo.criar(dados);
  }
}
