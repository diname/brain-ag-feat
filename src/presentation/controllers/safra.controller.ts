import { FazendaDto } from '@Application/dtos/fazenda.dto';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/fazenda')
@ApiTags('Fazendas')
export class FazendaController {
  contructor() {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as fazendas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de fazendas',
    type: FazendaDto,
  })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  async buscaFazendas(): Promise<FazendaDto[]> {
    return { message: 'Listar todas as fazendas' };
  }
}
