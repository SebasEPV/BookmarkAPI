import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    signIn() {
        return `You have signed in`;
    }

    signUp() {
        return `You have signed up`;
    }

    logOut() {
        return `You have logged out.`
    }
}
