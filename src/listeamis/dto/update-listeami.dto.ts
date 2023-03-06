import { PartialType } from '@nestjs/swagger';
import { CreateListeamiDto } from './create-listeami.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetListeamiDto } from './get-listami.dto';


export class UpdateListeamiDto extends PartialType(GetListeamiDto) {
  @ApiProperty()
  @Type(() => Number)
  readonly id: number;
  @ApiProperty()
  @Type(() => Number)
  readonly iduser: number;
  @ApiProperty()
  @Type(() => Number)
  readonly iduser2: number;
  @ApiProperty()
  @Type(() => Number)
  readonly statut: number;
}
