import multer from 'multer';
import fs from 'fs';
import { NextFunction, Request, Response } from 'express';

const MIME_TYPE_MAP: { [key: string]: string } = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    const path = 'src/upload/images';
    let error = null;
    fs.mkdirSync(path, { recursive: true });

    if (!isValid)
      error = Object.assign(new Error('Invalid mime type'), {
        status: 400,
      });

    cb(error, path);
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .replace(/\.[^.]+$/, '') // ตัดนามสกุลไฟล์ออก
      .replace(/\s+/g, '-'); // แทนที่ช่องว่างด้วยขีด
    const ext = MIME_TYPE_MAP[file.mimetype];
    const fileName = `${name}-${Date.now()}.${ext}`;
    const url = `${req.protocol}://${req.get('host')}`;
    req.body.image = `${url}/images/${fileName}`;

    cb(null, fileName);
  },
});

export const setFuncName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.func = 'uploadMiddleware';
  next();
};

export const upload = multer({ storage }).single('product');
