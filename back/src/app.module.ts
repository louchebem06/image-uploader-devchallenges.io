import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload/upload.controller';
import { ImageController } from './image/image.controller';

@Module({
  imports: [],
  controllers: [AppController, UploadController, ImageController],
  providers: [AppService],
})
export class AppModule {}
