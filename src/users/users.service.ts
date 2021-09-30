import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'test' },
    { id: 1, name: 'test2' },
  ];

  findAll(name?: string): User[] {
    return name ? this.users.filter((f) => f.name === name) : this.users;
  }

  findById(userId: number): User {
    return this.users.find((f) => f.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
