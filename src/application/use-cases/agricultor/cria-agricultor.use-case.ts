import { Agricultor } from '@Domain/entities/agricultor.entity';
import { AgricultorRepository } from '@Domain/repositories/agricultor.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CriarAgricultorUseCase {
  constructor(private readonly repo: AgricultorRepository) {}

  async execute(dados: Agricultor): Promise<Agricultor> {
    return await this.repo.criar(dados);
  }
}
