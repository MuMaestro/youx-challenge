import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

	constructor(private readonly service: ProfileService) {}

	@Post('register')
	async registerUser(@Body() body: Record<"username" | "password", string>) {
		return await this.service.registerUser(body)
	}

	@Get('checkcredentials')
	async check(@Body() body: Record<"username" | "password", string>) {
		const user = await this.service.checkCredentials(body)
		if(!user) {
			throw new HttpException('Usário não encontrado/credenciais erradas', HttpStatus.NOT_FOUND)
		}
		return user;
	}
}
