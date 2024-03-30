import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiCreatedResponse({ description: 'Created response' })
  @ApiBadRequestResponse({ description: 'Bad Request response' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'List of all users' })
  @ApiOkResponse({ description: 'OK response' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a user' })
  @ApiOkResponse({ description: 'OK response' })
  @ApiBadRequestResponse({ description: 'Bad Request response' })
  @ApiNotFoundResponse({ description: 'Not Found response' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiOkResponse({ description: 'OK response' })
  @ApiNotFoundResponse({ description: 'Not Found response' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a user' })
  @ApiNoContentResponse({ description: 'No Content response' })
  @ApiBadRequestResponse({ description: 'Bad Request response' })
  @ApiNotFoundResponse({ description: 'Not Found response' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
