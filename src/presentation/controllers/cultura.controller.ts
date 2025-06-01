import { AtualizarCulturaUseCase } from '@Application/use-cases/cultura/atualiza-cultura.use-case';
import { BuscarTodasCulturasUseCase } from '@Application/use-cases/cultura/busca-cultura.use-case';
import { CriarCulturaUseCase } from '@Application/use-cases/cultura/cria-cultura.use-case';
import { RemoverCulturaUseCase } from '@Application/use-cases/cultura/deleta-cultura.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cultura } from '../../domain/entities/cultura.entity';

@Controller('culturas')
export class CulturaController {
  constructor(
    private readonly criarUseCase: CriarCulturaUseCase,
    private readonly atualizarUseCase: AtualizarCulturaUseCase,
    private readonly removerUseCase: RemoverCulturaUseCase,
    private readonly buscarTodasUseCase: BuscarTodasCulturasUseCase,
  ) {}

  @Post()
  async criar(@Body() dto: Cultura): Promise<Cultura> {
    return this.criarUseCase.execute(dto);
  }

  @Put()
  async atualizar(@Body() dto: Cultura): Promise<Cultura> {
    return this.atualizarUseCase.execute(dto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<void> {
    return this.removerUseCase.execute(id);
  }

  @Get()
  async buscarTodas(): Promise<Cultura[]> {
    return this.buscarTodasUseCase.execute();
  }
}
