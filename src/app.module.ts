import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';



@Module({
  imports: [TypeOrmModule.forRoot(config),StudentModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
