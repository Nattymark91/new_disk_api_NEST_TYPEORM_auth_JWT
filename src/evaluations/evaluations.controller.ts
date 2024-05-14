import { Controller, Post, Body, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('evaluations')
@Controller('lessons')
export class EvaluationsController {
  constructor(private readonly evaluationsService: EvaluationsService) {}

  @Post(':id/evaluations') 
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: CreateEvaluationDto })
  @ApiResponse({
    status: 201,
    description: 'The evaluations has been added'
  })
  create(
    @Param('id') id: string, 
    @Body() createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationsService.create(createEvaluationDto, +id);
  }
}
