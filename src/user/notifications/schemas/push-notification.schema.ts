import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PushNotificationDto } from 'src/user/dto/push-notification.dto';

@Schema({ timestamps: true, id: false })
export class PushNotification extends Document implements PushNotificationDto {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  username: string;

  content: any;

  @Prop()
  sentAt: Date;
}

export const PushNotificationSchema = SchemaFactory.createForClass(PushNotification);