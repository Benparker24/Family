
import { Injectable } from '@nestjs/common';
import { FeedRepository } from './feed.repository';
import { Feed, Prisma } from '@prisma/client';
import {HenryStatus} from './feed.types'
@Injectable()
export class FeedService {
  constructor(private feedRepo: FeedRepository) {}

  async getHenryStatus(): Promise<HenryStatus| void> {
    let henryStatus: HenryStatus = {
        lastFed: new Date(),
        isHungry: true,
        minutesSinceLastFed: 10
    }
    console.log("henryStatus" + henryStatus)

    const feeds: Promise<Feed[]> = this.feedRepo.feeds({
        orderBy: 
            {
                feedTime: 'desc'
            }
        
  })
    return feeds.then ((feedsArray) => {
        const lastFed = feedsArray[0]
        const now = new Date()
        const minutesSinceLastFed = convertMsToMinutes(now.getTime()) - convertMsToMinutes(lastFed.feedTime.getTime())
        return {
            lastFed: lastFed.feedTime,
            isHungry: minutesSinceLastFed > 180,
            minutesSinceLastFed: minutesSinceLastFed
        }
    }
      )
      .catch((err) => console.log(err.message))
  }

  async createfeed(feedPostData): Promise<Feed> {
    return this.feedRepo.createfeed(feedPostData)
  }


}

function convertMsToMinutes(millis: number): number { 
    let seconds = Math.floor(millis / 1000)
    let minutes = Math.floor(seconds / 60)
    return minutes
  }