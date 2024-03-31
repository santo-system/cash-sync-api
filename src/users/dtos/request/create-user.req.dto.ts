import { ApiProperty } from '@nestjs/swagger';
import { IsAscii, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserRequestDto {
  @IsString()
  @IsAscii()
  @ApiProperty({ description: 'Nome do usuário' })
  readonly name: string;

  @IsEmail()
  @ApiProperty({ description: 'E-mail do usuário' })
  readonly email: string;

  @IsStrongPassword({
    minLength: 6,
    minNumbers: 0,
    minLowercase: 0,
    minUppercase: 0,
    minSymbols: 0,
  })
  @ApiProperty({ description: 'Senha do usuário', minLength: 6 })
  readonly password: string;
}
