import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from '../app.service';
import { FeedRepository } from './feed.repository';
import { Feed } from '@prisma/client';
import { FeedService } from './feed.service';
import {HenryStatus} from './feed.types'

@Controller()
export class FeedController {
  constructor(
    private readonly appService: AppService,
    private readonly feedService :FeedService
    ) {}

  // @Get()
  // async getFeeds(): Promise<Feed[]> {
  //   return this.feedService.feeds({});
  // } 

  @Get()
  async getHenryStatus(): Promise<HenryStatus | void> {
    console.log("inController")
    return this.feedService.getHenryStatus();
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
