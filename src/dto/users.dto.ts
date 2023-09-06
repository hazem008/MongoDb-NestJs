import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  age: number;

  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty()
  password: string;
}
