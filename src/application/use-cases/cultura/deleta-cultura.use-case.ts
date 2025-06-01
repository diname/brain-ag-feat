// remover-cultura.use-case.ts
import { CulturaRepository } from '@Domain/repositories/cultura.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RemoverCulturaUseCase {
  constructor(private readonly repo: CulturaRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.remover(id);
  }
}
