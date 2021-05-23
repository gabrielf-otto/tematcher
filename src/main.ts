import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { HttpExceptionFilter } from './shared/filters/HttpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter);

  await app.listen(3333);
}
bootstrap();
