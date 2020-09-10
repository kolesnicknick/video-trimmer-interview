import { Injectable } from '@nestjs/common';
import { IVideo } from './video.model';
import { UpdateVideoUrlPayload } from './dto/updateVideoUrl.payload';
import { UpdateVideoStatusPayload } from './dto/updateVideoStatus.payload';

@Injectable()
export class VideoService {
  async getVideoById(videoId: string): Promise<IVideo> {
    return
  }

  async updateVideoUrl(payload: UpdateVideoUrlPayload) {
    return Promise.resolve(undefined);
  }

  async updateVideoStatus(payload: UpdateVideoStatusPayload) {
    return Promise.resolve(undefined);
  }

  async deleteVideoById(id: string) {
    return undefined;
  }
}
