import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { Student } from 'src/entity/student.entity';
import { Address } from 'src/entity/adress.entity';
import { Course } from 'src/entity/course.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Student, Course, Address])],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
