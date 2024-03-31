import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateUserRequestDto,
  UpdateUserRequestDto,
  UserResponseDto,
} from '../dtos';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserRequestDto): Promise<UserResponseDto> {
    return await this.prisma.user.create({ data }).catch(() => {
      throw new UnprocessableEntityException();
    });
  }

  async findAll(): Promise<UserResponseDto[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<UserResponseDto> {
    return await this.prisma.user
      .findUniqueOrThrow({
        where: {
          id,
        },
      })
      .catch(() => {
        throw new NotFoundException();
      });
  }

  async update(id: string, data: UpdateUserRequestDto) {
    await this.findOne(id);
    return await this.prisma.user
      .update({
        data,
        where: {
          id,
        },
      })
      .catch(() => {
        throw new UnprocessableEntityException();
      });
  }

  async updatePartial(id: string, data: UpdateUserRequestDto) {
    await this.findOne(id);
    return await this.prisma.user
      .update({
        data,
        where: {
          id,
        },
      })
      .catch(() => {
        throw new UnprocessableEntityException();
      });
  }

  async remove(id: string) {
    return this.prisma.user
      .delete({
        where: {
          id,
        },
      })
      .catch(() => {
        throw new NotFoundException();
      });
  }
}
