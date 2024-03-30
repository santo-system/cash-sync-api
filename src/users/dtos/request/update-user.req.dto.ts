import { PartialType } from '@nestjs/swagger';
import { CreateUserRequestDto } from './create-user.req.dto';

export class UpdateUserRequestDto extends PartialType(CreateUserRequestDto) {}
