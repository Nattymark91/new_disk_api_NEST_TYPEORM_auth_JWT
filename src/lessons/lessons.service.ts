import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {

  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async create(createLessonDto: CreateLessonDto) {
    const lesson = await this.lessonRepository.save({
      name: createLessonDto.name,
      code: createLessonDto.code
    })
    const { id, name, code} = lesson

    return {
      id, 
      name, 
      code
    };
  }

  async findAll() {
    return await this.lessonRepository.find({
      relations: ['evaluations', 'evaluations.user']
    });
  }
}
