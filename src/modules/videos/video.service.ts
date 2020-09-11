import { BadRequestException, Injectable } from '@nestjs/common';
import { IVideo } from './video.model';
import { UpdateVideoUrlPayload } from './dto/updateVideoUrl.payload';
import { UpdateVideoStatusPayload } from './dto/updateVideoStatus.payload';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IProfile } from '../profile/profile.model';
import { CreateVideoPayload } from './dto/createVideo.dto';


@Injectable()
export class VideoService {
  constructor( @InjectModel('Video') private readonly videoModel: Model<IVideo>,) {
  }
  async getVideoById(videoId: string): Promise<IVideo> {
    return this.videoModel.findById(videoId);

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
