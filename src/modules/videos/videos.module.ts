import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoSchema } from './video.model';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Video', schema: VideoSchema}])],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideosModule {}
