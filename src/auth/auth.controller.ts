import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signIn() {
    console.log('signin');
    return this.authService.signIn();
  }

  @Post('signup')
  signUp() {
    return this.authService.signup();
  }

  @Get('test')
  test() {
    return 'test!';
  }
}
