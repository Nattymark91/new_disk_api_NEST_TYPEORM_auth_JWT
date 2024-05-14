import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2'

@Injectable()
export class TeacherService {

  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const isExist = await this.teacherRepository.findOne({
      where: {login: createTeacherDto.login},
    })
    if(isExist) throw new BadRequestException('Преподаватель с таким логином уже зарегистрирован')
    const teacher = await this.teacherRepository.save({
      login: createTeacherDto.login,
      password: await argon2.hash(createTeacherDto.password)
    })
    return {teacher}
  }


  async findOne(login: string) {
    return await this.teacherRepository.findOne({where: {login}});
  }
}

