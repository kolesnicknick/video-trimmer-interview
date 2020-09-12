import { BadRequestException, Injectable } from '@nestjs/common';
import { IVideo } from './video.model';
import { UpdateVideoUrlPayload } from './dto/updateVideoUrl.payload';
import { UpdateVideoStatusPayload } from './dto/updateVideoStatus.payload';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IProfile } from '../profile/profile.model';
import { CreateVideoPayload } from './dto/createVideo.dto';
import { VideoStatus } from './enum/VideoStatus';


@Injectable()
export class VideoService {
  constructor( @InjectModel('Video') private readonly videoModel: Model<IVideo>,) {
  }

  async getVideoById(videoId: string): Promise<IVideo> {
    return this.videoModel.findById(videoId);
  }

  async getVideosByOwner(ownerId: string): Promise<IVideo[]> {
   return this.videoModel.find()
   .populate('author', 'name')
   .where('uploader_id').equals(ownerId)
   .exec();
  }

  async getLatestScheduled(): Promise<IVideo> {
    return this.videoModel.findOne({status: VideoStatus.SCHEDULED})
    .sort([['created_date', -1]]);
  }

  async createVideo(payload: CreateVideoPayload): Promise<IVideo>{
    return this.videoModel.create(payload)
  }

  async updateVideoUrl(payload: UpdateVideoUrlPayload, id: string): Promise<IVideo> {
    return this.videoModel.updateOne({ id: new Types.ObjectId(id) }, payload);
  }

  async updateVideoStatus(payload: UpdateVideoStatusPayload, id: string): Promise<IVideo> {
    return this.videoModel.updateOne({ id: new Types.ObjectId(id) }, payload);
  }

  async deleteVideoById(id: string): Promise<IVideo> {
    return this.videoModel.findOneAndDelete({ id: new Types.ObjectId(id) });
  }
}
