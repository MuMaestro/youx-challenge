import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ProfileService } from '../users/profile/profile.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { ProfileModule } from '../users/profile/profile.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
@Module({
	imports: [
		PassportModule,
		ProfileModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: '3600s' },
		}),
	],
	providers: [AuthService, LocalStrategy, JwtStrategy],
	controllers: [AuthController],
})
export class AuthModule { }
