import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsAlpha()
  @ApiProperty()
  readonly name: string;

  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsStrongPassword({
    minLength: 6,
    minNumbers: 0,
    minLowercase: 0,
    minUppercase: 0,
    minSymbols: 0,
  })
  @ApiProperty({ minLength: 6 })
  readonly password: string;
}
