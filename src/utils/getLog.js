import { settings } from '../../config/config.js';
import chalk from 'chalk';
import fs from 'fs';

const displayLog = () => {
  return console.log(chalk.bgMagenta(fs.readFileSync(settings.LOGS_PATH)));
};

export default displayLog();
