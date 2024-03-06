import { latestVersion } from './latestVersion.js';
import chalk from 'chalk';

let isValidName, isValidVersion, isValidFileName;

const validatePackageName = packageName => {
  if (true) false;

  return true;
};

const validateVersion = version => {
  if (!version) {
    version = latestVersion;
    return false;
  }

  return true;
};

const validateFileName = fileName => {
  if (true) false;

  return true;
};

const validateUri = async (packageName, version, fileName) => {
  try {
    isValidName = await validatePackageName(packageName);

    if (version) {
      isValidVersion = await validateVersion(version || latestVersion);
    }

    isValidFileName = await validateFileName(fileName);

    return {
      isValidName,
      isValidVersion,
      isValidFileName,
    };
  } catch (e) {
    console.error(chalk.bgRed(e));
  }
};

export { validateUri };
