import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateLessonDto {
    @IsString()
    @MaxLength(100, {message: 'Слишком длинное название'})
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsString()
    @MaxLength(20, {message: 'Слишком длинный код'})
    @IsNotEmpty()
    @ApiProperty()
    code: string;
}
