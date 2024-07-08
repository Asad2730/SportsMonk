import { PartialType } from '@nestjs/mapped-types';
import { CreateCricketDmDto } from './create-cricket-dm.dto';

export class UpdateCricketDmDto extends PartialType(CreateCricketDmDto) {}
