import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscription, SubscriptionSchema } from './schemas/subscription.schema';
import { VideoBasicInfo, VideoBasicInfoSchema } from 'src/core/videos/schemas/video-basic-info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VideoBasicInfo.name, schema: VideoBasicInfoSchema, collection: 'videos-basicinfo' },
      { name: Subscription.name, schema: SubscriptionSchema, collection: 'subscriptions' }
    ]),
  ],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
  exports: [SubscriptionsService]
})
export class SubscriptionsModule { }
