import { Module } from '@nestjs/common';
import { FeedController } from './feedSystem/feed.controller';
import { AppService } from './app.service';
import { FeedRepository } from './feedSystem/feed.repository';
import { FeedService } from './feedSystem/feed.service';
import { PrismaService } from './repositories/prisma.service';

@Module({
  imports: [],
  controllers: [FeedController],
  providers: [AppService,FeedRepository, PrismaService, FeedService],
})
export class AppModule {}
