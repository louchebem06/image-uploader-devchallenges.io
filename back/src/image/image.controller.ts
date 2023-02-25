import { Controller, Get, Header, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';

@Controller('image')
export class ImageController {
	@Get(':image')
	getImage(@Param('image') imageName: string) {
		const file = createReadStream("uploads/" + imageName);
		return new StreamableFile(file);
	}
}
