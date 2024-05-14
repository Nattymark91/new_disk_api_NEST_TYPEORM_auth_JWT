import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateEvaluationDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    score: number;
}

