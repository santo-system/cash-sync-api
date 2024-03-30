import { IsUUID } from 'class-validator';

export class UUIDParamRequestDto {
  @IsUUID()
  readonly id: string;
}
