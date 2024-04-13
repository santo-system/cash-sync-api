import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateUserRequestDto } from '../request/create-user.req.dto';

export class UserResponseDto extends OmitType(CreateUserRequestDto, [
  'password',
] as const) {
  @ApiProperty({
    description: 'Id do registro',
    name: 'id',
    example: '986dcaf4-c1ea-4218-b6b4-e4fd95a3c28e',
  })
  readonly id: string;

  @ApiProperty({
    description: 'Data em que o registro foi criado',
    name: 'createdAt',
    example: '2024-03-30T22:53:13.308Z',
  })
  readonly createdAt: Date;

  @ApiProperty({
    description: 'Data da última atualização do registro',
    name: 'updatedAt',
    example: '2024-03-30T22:53:13.308Z',
  })
  readonly updatedAt: Date;
}
