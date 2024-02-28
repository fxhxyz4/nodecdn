import { router } from './routes/get/router.js';
import { settings } from '../config/config.js';
import { logger } from './utils/writeLog.js';
import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();

const { PORT, HOST, NODE_ENV, LOGS, LOGS_PATH } = settings;

const publicPath = `./public/`;
const __dirname = path.dirname(publicPath);

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

if (NODE_ENV !== 'dev') {
  app.use(
    morgan(LOGS, {
      skip: function (req, res) {
        return res.statusCode < 400;
      },

      stream: logger(LOGS_PATH),
    })
  );
}

app.enable('strict routing');

app.enable('trust proxy', 1);
app.disable('x-powered-by');

app.use('/', router);

app.listen(PORT, () => {
  console.debug(
    chalk.bgCyan(`Server started on ${HOST}:${PORT} / NODE_ENV: ${NODE_ENV}`)
  );
});
