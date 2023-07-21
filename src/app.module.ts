import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedService } from './repositories/feed.service';
import { PrismaService } from './repositories/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,FeedService, PrismaService],
})
export class AppModule {}
