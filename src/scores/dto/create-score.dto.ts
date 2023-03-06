import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { GetScoreDto } from './get-score.dto';

export class CreateScoreDto extends PartialType(GetScoreDto) {

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  score: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  iduser: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  idpartie: number;
}
