import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { FeedService } from './repositories/feed.service';
import { Feed } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly feedService :FeedService
    ) {}

  @Get()
  async getFeeds(): Promise<Feed[]> {
    return this.feedService.feeds({});
    // return this.appService.getHello();
  } 

  @Post('post')
  async postFeed(
    @Body() postData: { fedBy: string;},
  ): Promise<Feed> {
    const { fedBy} = postData;
    return this.feedService.createfeed({
      fedBy,
      feedTime: new Date(),
    });
  }
}
