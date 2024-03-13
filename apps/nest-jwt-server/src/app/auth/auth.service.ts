import { Injectable } from '@nestjs/common';
import { ProfileService } from '../users/profile/profile.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(private readonly profileService: ProfileService, private readonly jwtService: JwtService) { }

	async validateUser(username: string, password: string) {
		return await this.profileService.checkCredentials({ username, password });
	}

	async login(payload: { username: string, id: string }) {
		return {
			access_token: this.jwtService.sign(payload)
		}
	}
}