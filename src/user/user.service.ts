import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {email: createUserDto.email},
    })
    if(existUser) throw new BadRequestException('Пользователь с таким email уже зарегистрирован')
    const user = await this.userRepository.save({
      name: createUserDto.name,
      email: createUserDto.email
    })
    const { id, name, email} = user

    return {
      id, 
      name, 
      email
    };
  }

  async findAll() {
    return await this.userRepository.find()
  }
}
