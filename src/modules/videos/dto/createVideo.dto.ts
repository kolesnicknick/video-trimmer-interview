import { VideoStatus } from '../enum/VideoStatus';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsAlphanumeric,
  Matches, IsEnum,
} from 'class-validator';

/**
 * Video Creation Payload Class
 */
export class CreateVideoPayload {
  /**
   * from field
   */
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  starts_from: number;

  /**
   * Name field
   */
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  name: string;
  /**
   * Uploader foreign key
   */
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  uploader_id: string;
  /**
   * Name field
   */
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsEnum(VideoStatus)
  status: VideoStatus;

  /**
   * Duration field
   */
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  duration: number;
}
