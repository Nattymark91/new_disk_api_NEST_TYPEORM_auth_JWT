import { BadRequestException, Injectable } from '@nestjs/common';
import { TeacherService } from 'src/teacher/teacher.service';
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { ITeacher } from 'src/types/types';

@Injectable()
export class AuthService {
  constructor( 
    private readonly teacherService: TeacherService, 
    private readonly jwtService: JwtService,
    ) {}

  async validateUser(login: string, password: string) {
    const teacher = await this.teacherService.findOne(login)
    const passwordIsMatch = await argon2.verify(teacher.password, password)
    if (teacher && passwordIsMatch) {
      return teacher
    }
    throw new BadRequestException('Не верный логин или пароль')
  }

  async login(teacher: ITeacher) {
    const { id, login} = teacher;
    return {
      id, 
      login, 
      token: this.jwtService.sign({ id: teacher.id, login: teacher.login }),
    };
  }
}
