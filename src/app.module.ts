import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CaptchaModule } from './auth/captcha/captcha.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@Module({
  imports: [
    YoutubeModule,
    MongooseModule.forRoot(`mongodb://${process.env.VIEWTUBE_DATABASE_HOST}/viewtube`, {
      user: process.env.VIEWTUBE_DATABASE_USER,
      pass: process.env.VIEWTUBE_DATABASE_PASSWORD
    }),
    UserModule,
    AuthModule,
    CaptchaModule,
    ConfigModule.forRoot(),
    CaptchaModule,
    AutocompleteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
