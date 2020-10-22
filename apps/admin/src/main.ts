import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('LOL后台接口管理')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('moba')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('admin-docs', app, document);

  await app.listen(3000);
}
bootstrap();
