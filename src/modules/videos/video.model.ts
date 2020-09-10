import { Schema, Document } from 'mongoose';
import { VideoStatus } from './enum/VideoStatus';

/**
 * Mongoose Profile Schema
 */
export const VideoSchema = new Schema({
  username: { type: String, required: true },
  starts_from: { type: Number, required: false },
  duration: { type: Number, required: false },
  video_url: { type: String, required: false },
  status: { type: String,
    required: false,
    enum: Object.values(VideoStatus)
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  trimmed_date:{
    type: Date,
    required: false,
    default: null
  },
  uploader_id: {
    type: String,
    required: true
  }
});

/**
 * Mongoose Profile Document
 */
export interface IVideo extends Document {
  /**
   * UUID
   */
  readonly _id: Schema.Types.ObjectId;
  /**
   * Username
   */
  readonly starts_from: number;
  /**
   * Username
   */
  readonly duration: number;
  /**
   * Status of Done
   */
  readonly status: VideoStatus;

  /**
   * Created Date
   */
  readonly created_date: Date;
}
