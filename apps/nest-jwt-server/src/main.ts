/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { PrismaClientExceptionFilter } from './app/prisma/prisma.filter';

async function addListeningPort(app: INestApplication) {
	const port = process.env.PORT || 3000;
	await app.listen(port);
	return port;
}

function addGlobalPrefix(app: INestApplication) {
	const globalPrefix = 'api';
	app.setGlobalPrefix(globalPrefix);
	return globalPrefix;
}

function addPrismaExceptionFilter(app: INestApplication) {
	const { httpAdapter } = app.get(HttpAdapterHost);
	app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
	return app;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  addPrismaExceptionFilter(app);
  const globalPrefix = addGlobalPrefix(app);
  const port = await addListeningPort(app);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();


