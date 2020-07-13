import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Subscription extends Document {
  @Prop({ index: { unique: true } })
  username: string;

  @Prop({type: Array, required: true })
  subscriptions: Array<{ channelId: string }>
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);