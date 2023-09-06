import { Body, Post, Get, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/dto/users.dto';
import { LoginDto } from 'src/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() userDto: UserDto): Promise<{ token: string }> {
    return this.authService.signUp(userDto);
  }
  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }
}
