import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { GetTypeDto } from './get-type.dto';

export class CreateTypeDto extends PartialType(GetTypeDto) {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  typedejeux: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  nbdejeux: number;

  @Type(() => Number)
  @ApiProperty()
  nbcartes: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  typedecarte: string;
}
