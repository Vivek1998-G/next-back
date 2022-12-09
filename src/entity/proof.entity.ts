import { Column, Entity, ManyToOne, PrimaryColumn ,PrimaryGeneratedColumn} from 'typeorm';
import { Student } from './student.entity';

@Entity('proof')
export class Proof {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  proof: string;
  @ManyToOne(() => Student, (student) => student.course, { cascade: true })
  student: Student;
}
