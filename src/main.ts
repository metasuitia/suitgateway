import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Meta Suits Gateway');

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('apimetasuit');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(envs.port);
  logger.log(`Main Meta Suit Gateway is running on port ${envs.port}`);
}
bootstrap();
