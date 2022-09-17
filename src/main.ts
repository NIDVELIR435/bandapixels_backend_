import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import { AppModule } from '@backend/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: true },
  });
  const port = 3000;

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('CMC')
      .setDescription('The CMC API description')
      .setVersion('1.0')
      .addBasicAuth()
      .addBearerAuth()
      .addServer(`http://localhost:${port}/api`)
      .build()
  );

  SwaggerModule.setup('api/swagger', app, document);

  app.setGlobalPrefix('api/');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(compression());

  await app.listen(port);
}
bootstrap().catch(console.error);
