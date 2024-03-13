import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { createCipheriv, pseudoRandomBytes, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { hash, genSalt, compare as dehash } from 'bcrypt';
type LoginCredentials = { username: string, password: string };

@Injectable()
export class ProfileService {
	constructor(private readonly prisma: PrismaService) { }

	private async decryptPassword(password: string, encryptedPassword: string) {
		return await dehash(password, encryptedPassword);
	}

	private async encryptPassword(password: string) {
		return await hash(password, Number(process.env.PASSWORD_SALT_ROUNDS));
	}

	async registerUser({ username, password }: LoginCredentials) {
		return this.prisma.credetials.create({
			data: {
				username,
				password: await this.encryptPassword(password),
			}
		}).then((data) => ({ id: data.id, password, username }))
	}

	async getCredentialsOfUsername(username: string) {
		return await this.prisma.credetials.findUnique({
			where: { username: username }
		})
	}

	async checkCredentials(credetials: LoginCredentials) {
		const user = await this.getCredentialsOfUsername(credetials.username);
		const isPasswordValid = await this.decryptPassword(credetials.password, user.password);
		return isPasswordValid ? { id: user.id, username: user.username, } : undefined;
	}
}
