import { validateUri } from '../../utils/validateUri.js';
import { checkOrigin } from '../../utils/origin.js';
import { npmWorker } from '../../modules/npm.js';
import { Router } from 'express';
import chalk from 'chalk';
import path from 'path';

const origin = checkOrigin();

const publicPath = path.resolve(`./public`);
const router = Router();

router.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(publicPath, './index.html'));
});

router.get('/:packageName@:version/:fileName', async (req, res) => {
  try {
    const { packageName, version, fileName } = req.params;

    const { isValidName, isValidVersion, isValidFileName } = await validateUri(
      packageName,
      version,
      fileName
    );

    if (!isValidFileName || !isValidName || !isValidVersion) {
      return res.send(`🔴 Package validate failed!`);
    }

    const npmResponse = await npmWorker(packageName, version, fileName);

    // worker func

    console.log(npmResponse);

    res.send(`🟢 ${origin}/${packageName}@${version}/${fileName}`);
  } catch (e) {
    console.error(chalk.bgRed(e));
  }
});

router.get('/styles/index.css', (req, res) => {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.join(publicPath, './styles/index.css'));
});

router.get('/favicon.ico', (req, res) => {
  res.set('Content-Type', 'image/x-icon');
  res.sendFile(path.join(publicPath, './favicon.ico'));
});

router.get('/robots.txt', (req, res) => {
  res.set('Content-Type', 'plain/text');
  res.sendFile(path.join(publicPath, './robots.txt'));
});

router.get('/sitemap.xml', (req, res) => {
  res.set('Content-Type', 'application/xml');
  res.sendFile(path.join(publicPath, './sitemap.xml'));
});

router.get('*', (req, res) => {
  res.sendStatus(404);
});

export { router };
