import { UUIDParamRequestDto } from '@lib/common-params/dtos';
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
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import {
  CreateUserRequestDto,
  UpdateUserRequestDto,
  UserResponseDto,
} from '../dtos';
import { UserService } from '../services/user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um usuário' })
  @ApiCreatedResponse({
    description: 'Recurso criado',
    type: UserResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiUnprocessableEntityResponse({
    description: 'Recurso não foi criado',
  })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  async create(@Body() dto: CreateUserRequestDto): Promise<UserResponseDto> {
    return await this.userService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @ApiOkResponse({
    description: 'Consulta realizada',
    type: [UserResponseDto],
  })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  async findAll(): Promise<UserResponseDto[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um usuário' })
  @ApiParam({
    description: 'User id',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @ApiOkResponse({
    description: 'Consulta realizada',
    type: UserResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiNotFoundResponse({ description: 'Recurso não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  async findOne(
    @Param() { id }: UUIDParamRequestDto,
  ): Promise<UserResponseDto> {
    return await this.userService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um usuário' })
  @ApiParam({
    description: 'User id',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @ApiOkResponse({ description: 'Recurso atualizado' })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiUnprocessableEntityResponse({
    description: 'Recurso não foi atualizado',
  })
  @ApiNotFoundResponse({ description: 'Recurso não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  async update(
    @Param() { id }: UUIDParamRequestDto,
    @Body() dto: UpdateUserRequestDto,
  ): Promise<any> {
    return await this.userService.update(id, dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar parcialmente um usuário' })
  @ApiParam({
    description: 'User id',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @ApiOkResponse({ description: 'Recurso atualizado parcialmente' })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiUnprocessableEntityResponse({
    description: 'Recurso não foi atualizado',
  })
  @ApiNotFoundResponse({ description: 'Recurso não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  async updatePartial(
    @Param() { id }: UUIDParamRequestDto,
    @Body() dto: UpdateUserRequestDto,
  ): Promise<any> {
    return await this.userService.updatePartial(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um usuário' })
  @ApiParam({
    description: 'User id',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  @ApiNoContentResponse({ description: 'Recurso removido' })
  @ApiBadRequestResponse({ description: 'Solicitação incorreta' })
  @ApiNotFoundResponse({ description: 'Recurso não encontrado' })
  @ApiInternalServerErrorResponse({ description: 'Erro Interno do Servidor' })
  async remove(@Param() { id }: UUIDParamRequestDto): Promise<any> {
    return await this.userService.remove(id);
  }
}
