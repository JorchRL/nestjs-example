import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return 'Signed In!';
  }
  signup() {
    return 'Signed Up!';
  }
}
