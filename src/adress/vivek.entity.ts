import {
    Column,
    Entity,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  
  @Entity('vivek')
  export class Vivek {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    course: string;
    @Column()
    duration:number;
  }