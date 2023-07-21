import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client'
import { PrismaService } from './repositories/prisma.service';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks()
  // const prismaService = app.get(PrismaService)
  // prismaService.enableShutdownHooks(app)

  await app.listen(process.env.PORT || 3000 );
};
bootstrap();

