import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { VideoService } from "./video.service";
import { IVideo } from "./video.model";
import { UpdateVideoUrlPayload } from "./dto/updateVideoUrl.payload";
import { UpdateVideoStatusPayload } from "./dto/updateVideoStatus.payload";
import { IGenericMessageBody } from "../profile/profile.service";
import { CreateVideoPayload } from "./dto/createVideo.dto";

@ApiBearerAuth()
@ApiTags('videos')
@Controller('api/v1/video')
export class VideoController {
  /**
   * Constructor
   * @param videosService
   */
  constructor(private readonly videosService: VideoService) {
  }

  /**
   * Retrieves a particular profile
   * @param videoId the id of video to pull
   * @returns {Promise<IVideo>} queried video info
   */
  @Get('/:videoId')
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({ status: 200, description: 'Fetch Profile Request Received' })
  @ApiResponse({ status: 400, description: 'Fetch Profile Request Failed' })
  async getVideo(@Param('videoId') videoId: string): Promise<IVideo> {
    const video = await this.videosService.getVideoById(videoId);
    if (!video) {
      throw new NotFoundException(
        'The video with specified ID not found.',
      );
    }
    return video;
  }

  /**
   * Retrieves a particular profile
   * @returns {Promise<IVideo>} queried video info
   * @param payload
   */
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({ status: 200, description: 'Fetch Profile Request Received' })
  @ApiResponse({ status: 400, description: 'Fetch Profile Request Failed' })
  async createVideo(@Body() payload: CreateVideoPayload): Promise<IVideo> {
    return await this.videosService.createVideo(payload);
  }

  /**
   * Update videoURL for the item
   * @param {UpdateVideoUrlPayload} payload
   * @param videoId
   * @returns {Promise<IVideo>} Updated video data
   */
  @Patch(':id/url')
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({ status: 200, description: 'Video URL updated' })
  @ApiResponse({ status: 400, description: 'Video URL update failed' })
  async updateVideoUrl(@Body() payload: UpdateVideoUrlPayload,
                       @Param('videoId') videoId: string ) {
    return await this.videosService.updateVideoUrl(payload, videoId);
  }

  /**
   * Updates video status
   * @body {UpdateVideoStatusPayload} payload
   * @returns {Promise<IVideo>} updated video data
   * @param payload
   * @param videoId
   */
  @Patch(':id/status')
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({ status: 200, description: 'Video Status updated' })
  @ApiResponse({ status: 400, description: 'Video Status update failed' })
  async updateVideoStatus(@Body() payload: UpdateVideoStatusPayload,
                          @Param('videoId') videoId: string) {
    return await this.videosService.updateVideoStatus(payload, videoId);
  }

  /**
   * Removes video from database
   * @param {id} id
   * @returns {Promise<IGenericMessageBody>} whether or not the video has been deleted
   */
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({ status: 200, description: 'Delete Video Request Received' })
  @ApiResponse({ status: 400, description: 'Delete Video Request Failed' })
  async delete(
    @Param('id') id: string,
  ): Promise<IGenericMessageBody> {
    return this.videosService.deleteVideoById(id).then(i => {
        return { message: `User with id: ${id} deleted` } as IGenericMessageBody;
      },
    ).catch(e => {
        return { message: `User with id deletion failed` } as IGenericMessageBody;
    });
  }
}
