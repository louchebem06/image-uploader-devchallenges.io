import { BadRequestException, Controller, ForbiddenException, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {v4 as uuidv4} from 'uuid';
const fs = require('fs');

@Controller('upload')
export class UploadController {
	@Post()
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File): object {
		const mimetype = file.mimetype;
		if (mimetype != "image/jpeg" && mimetype != "image/jpg" && mimetype != "image/png")
			throw new ForbiddenException('Format not valid');
		const uuid = uuidv4();
		if (!fs.existsSync("uploads")){
			fs.mkdirSync("uploads");
		}
		const ext = mimetype.split('/')[1];
		const filename = `${uuid}.${ext}`;
		console.log(filename);
		fs.writeFile(`uploads/${filename}`, file.buffer,  "binary", (err) => {
			if (err) {
				throw new BadRequestException();
			}
		});
		let response = {
			statusCode: 200,
			message: filename
		};
		return (response);
	}
}
