import fs from 'fs';

const logger = LOGS_PATH => {
  return fs.createWriteStream(LOGS_PATH);
};

export { logger };
