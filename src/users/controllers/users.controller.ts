import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UUIDParamDto } from '../dto/uuid-param.dto.input';
import { UsersService } from '../services/users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um usuário' })
  @ApiCreatedResponse({ description: 'Usuário criado' })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiOkResponse({ description: 'Consulta realizada com sucesso' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um usuário' })
  @ApiParam({
    description: 'User id',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @ApiOkResponse({ description: 'Consulta realizada com sucesso' })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiNotFoundResponse({ description: 'Recurso não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  findOne(@Param() { id }: UUIDParamDto) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um usuário' })
  @ApiParam({
    description: 'User id',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @ApiOkResponse({ description: 'Usuário atualizado' })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiNotFoundResponse({ description: 'Recurso não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  update(@Param() { id }: UUIDParamDto, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar parcialmente um usuário' })
  @ApiParam({
    description: 'User id',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @ApiOkResponse({ description: 'Usuário atualizado parcialmente' })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiNotFoundResponse({ description: 'Recurso não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  updatePartial(@Param() { id }: UUIDParamDto, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um usuário' })
  @ApiParam({
    description: 'User id',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @ApiNoContentResponse({ description: 'Usuário removido' })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiNotFoundResponse({ description: 'Recurso não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  remove(@Param() { id }: UUIDParamDto) {
    return this.usersService.remove(id);
  }
}
