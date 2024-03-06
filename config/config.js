import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.dirname(`./`);
const envFiles = ['.env', `.env.${process.env.NODE_ENV}`];

let settings = {};

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
  dotenv.config({
    path: path.resolve(__dirname, envFiles[1]),
  });
} else {
  dotenv.config({
    path: path.resolve(__dirname, envFiles[0]),
  });
}

settings = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  NODE_ENV: process.env.NODE_ENV,
  LOGS: process.env.LOGS,
  LOGS_PATH: process.env.LOGS_PATH,
};

Object.freeze(settings);

export { settings };
