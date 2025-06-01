import { FazendaRepository } from '@Domain/repositories/fazenda.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RemoverFazendaUseCase {
  constructor(private readonly repo: FazendaRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.remover(id);
  }
}
