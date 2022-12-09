import { Controller,Get ,Post,Body,Put,Delete,Param} from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { StudentService } from './student.service';
import { UpdateStudentDto } from '../dto/update-studnt.dto';
@Controller('student')
export class StudentController {
  private topicArray = ['STUDENT_ADD', 'STUDENT_UPDATE', 'STUDENT_DELETE'];
  private serviceName = [
    'STUDENT_SERVICE',
    'STUDENT_SERVICE',
    'STUDENT_SERVICE',
  ];
  constructor(private readonly studentService: StudentService) {
    // this.module_init();
  }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
  @Post('/adress')
  createAddress(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createAddress(createStudentDto);
  }

  @Post('/course')
  createCourse(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createCourse(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }
  @Get('/course')
  findCourseAll() {
    return this.studentService.findCourseAll();
  }
  @Get('/adress')
  findAdressAll(){
    return this.studentService.findAdressAll()
  }

  // @Get('/:id')
  // findOne(@Param('id') id: string) {
  //   console.log('ji');
  //   return this.studentService.findOne(+id);
  // }

  @Put()
  update(@Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(updateStudentDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }
    @Get()
    index(): string {
      return "This action will return contacts";
    }    
}
