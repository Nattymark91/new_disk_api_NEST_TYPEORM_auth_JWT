import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateTeacherDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20, {message: 'Слишком длинный логин'})
    @ApiProperty()
    login: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4, {message: 'Слишком короткий пароль'})
    @ApiProperty()
    password: string;
}
