import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import config from '@/config';
import { Request } from 'express';

const S3 = new AWS.S3({
  accessKeyId: config.S3_ACCESS_KEY_ID,
  secretAccessKey: config.S3_SECRET_ACCESS_KEY,
  region: config.S3_REGION,
});

const storage = multerS3({
  s3: S3,
  bucket: config.S3_BUCKET,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
  key: function (req: Request, file: Express.Multer.File, callback) {
    callback(null, `uploads/${Date.now()}_${file.originalname}`);
  },
});

export default multer({ storage });
