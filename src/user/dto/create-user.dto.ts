import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MaxLength(100, {message: 'Слишком длинное имя'})
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsEmail()
    @MaxLength(30, {message: 'Слишком длинный адрес'})
    @IsNotEmpty()
    @ApiProperty()
    email: string;
}