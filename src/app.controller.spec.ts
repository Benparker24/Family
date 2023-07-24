import { Test, TestingModule } from '@nestjs/testing';
import { FeedController } from './feedSystem/feed.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [FeedController],
      providers: [AppService],
    }).compile();
  });

  // describe('getHello', () => {
  //   it('should return "Hello World!"', () => {
  //     const appController = app.get(FeedController);
  //     expect(appController.getFeeds()).toBe('Hello World!');
  //   });
  // });
});
