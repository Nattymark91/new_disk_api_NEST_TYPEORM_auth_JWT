import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation } from './entities/evaluation.entity';

@Injectable()
export class EvaluationsService {

  constructor(
    @InjectRepository(Evaluation)
    private readonly evalutionRepository: Repository<Evaluation>,
  ) {}

  async create(createEvaluationDto: CreateEvaluationDto, lesson_id: number) {

    const evalution = await this.evalutionRepository.save({
      score: createEvaluationDto.score,
      user: {id: createEvaluationDto.user_id},
      lesson: {id: lesson_id}
    })
    const { id, user, score} = evalution

    return {
      id, 
      user_id: user.id,
      score
    };
  }

  // async findAll() {
  //   const evalutions = await this.evalutionRepository.find({
  //     relations: {
  //       user: true
  //     }
  //   });

  //   const [id, scope, user] = evalutions

  //   return {id, scope}
  // }

}
