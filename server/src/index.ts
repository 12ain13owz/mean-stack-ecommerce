import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import log from './utils/logger';
import router from './routes';
import handlerError from './middlewares/handler-error.middleware';
import dbConnect from './utils/db-connect';

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

app.use(router);
app.use(handlerError);

app.listen(PORT, () => {
  log.info(`Server listening on port ${PORT}`);
  dbConnect();
});
