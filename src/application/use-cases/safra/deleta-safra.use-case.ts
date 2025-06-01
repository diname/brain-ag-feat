// remover-safra.use-case.ts
import { SafraRepository } from '@Domain/repositories/safra.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RemoverSafraUseCase {
  constructor(private readonly repo: SafraRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.remover(id);
  }
}
