import { Injectable } from '@nestjs/common';
import { PrismaService } from '../repositories/prisma.service';
import { Feed, Prisma } from '@prisma/client';

@Injectable()
export class FeedRepository {
  constructor(private prisma: PrismaService) {}

  async feed(
    feedWhereUniqueInput: Prisma.FeedWhereUniqueInput,
  ): Promise<Feed | null> {
    return this.prisma.feed.findUnique({
      where: feedWhereUniqueInput,
    });
  }

  async feeds(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FeedWhereUniqueInput;
    where?: Prisma.FeedWhereInput;
    orderBy?: Prisma.FeedOrderByWithRelationInput;
  }): Promise<Feed[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.feed.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createfeed(data: Prisma.FeedCreateInput): Promise<Feed> {
    return this.prisma.feed.create({
      data,
    });
  }

  async updatefeed(params: {
    where: Prisma.FeedWhereUniqueInput;
    data: Prisma.FeedUpdateInput;
  }): Promise<Feed> {
    const { where, data } = params;
    return this.prisma.feed.update({
      data,
      where,
    });
  }

  async deletefeed(where: Prisma.FeedWhereUniqueInput): Promise<Feed> {
    return this.prisma.feed.delete({
      where,
    });
  }
}