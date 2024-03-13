import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

	constructor(private readonly service: ProfileService) { }

	@Post('register')
	async registerUser(@Body() body: Record<"username" | "password", string>) {
		return await this.service.registerUser(body)
	}

	@UseGuards(JwtAuthGuard)
	@Get()
	async getProfile(@Req() req) {
		return await this.service
			.getCredentialsOfUsername(req.user.username)
			.then(({ id, username }) => ({ id, username }));
	}

}
