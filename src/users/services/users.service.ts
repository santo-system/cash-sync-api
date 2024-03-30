import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto, UpdateUserRequestDto } from '../dtos';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserRequestDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserRequestDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
