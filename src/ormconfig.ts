import { Student } from "./entity/student.entity";
import { Course } from "./entity/course.entity";
import { Address } from "./entity/adress.entity";
import { Proof } from "./entity/proof.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'Vivek@1234',
    database: 'postgres',
    synchronize: true,
    entities: [Student, Address, Course, Proof],
  };