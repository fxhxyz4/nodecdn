import { settings } from '../config/config.js';
import express from 'express';
import chalk from 'chalk';

const app = express();

const { PORT, HOST } = settings;

app.listen(PORT, () => {
  console.debug(chalk.bgCyan(`Server started on ${HOST}:${PORT}`));
});
