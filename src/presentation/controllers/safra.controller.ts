import { AtualizarSafraUseCase } from '@Application/use-cases/safra/atualiza-safra.use-case';
import { BuscarTodasSafrasUseCase } from '@Application/use-cases/safra/busca-safra.use-case';
import { CriarSafraUseCase } from '@Application/use-cases/safra/cria-safra.use-case';
import { RemoverSafraUseCase } from '@Application/use-cases/safra/deleta-safra.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Safra } from '../../domain/entities/safra.entity';

@Controller('safras')
export class SafraController {
  constructor(
    private readonly criarUseCase: CriarSafraUseCase,
    private readonly atualizarUseCase: AtualizarSafraUseCase,
    private readonly removerUseCase: RemoverSafraUseCase,
    private readonly buscarTodasUseCase: BuscarTodasSafrasUseCase,
  ) {}

  @Post()
  async criar(@Body() dto: Safra): Promise<Safra> {
    return this.criarUseCase.execute(dto);
  }

  @Put()
  async atualizar(@Body() dto: Safra): Promise<Safra> {
    return this.atualizarUseCase.execute(dto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<void> {
    return this.removerUseCase.execute(id);
  }

  @Get()
  async buscarTodas(): Promise<Safra[]> {
    return this.buscarTodasUseCase.execute();
  }
}
