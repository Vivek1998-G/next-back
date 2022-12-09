import { Column, Entity, JoinColumn, OneToMany,  OneToOne,  PrimaryColumn,PrimaryGeneratedColumn} from 'typeorm';
import { Course } from './course.entity';
import { Address } from './adress.entity';

@Entity('student')
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    name: string;
    @Column({ nullable: true })
    address: string;
    @Column({ nullable: true })
    course: string;

    @OneToOne(() => Address, (adress) => adress.address)
    @JoinColumn()
    adress: Address;

    @OneToMany(() => Course, (ccourse) => ccourse.student)
    @JoinColumn()
    ccourse: Course[];
}
