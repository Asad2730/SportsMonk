import { Column, PrimaryColumn } from "typeorm";

export class CricketDm {

    @PrimaryColumn()
    id:number;
    
    @Column('jsonb')
    data:any;
}
