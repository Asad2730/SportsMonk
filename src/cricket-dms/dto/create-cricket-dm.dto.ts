import {  IsJSON } from "class-validator"

export class CreateCricketDmDto {
    @IsJSON()
    data:any
}
