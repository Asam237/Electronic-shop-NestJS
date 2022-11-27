import { CacheModule, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_URL } from 'common/vars';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.register(),
    EventEmitterModule.forRoot(),
    MongooseModule.forRoot(DB_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
