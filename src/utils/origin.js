import { settings } from '../../config/config.js';

let origin;

const checkOrigin = () => {
  const { NODE_ENV, HOST, PORT } = settings;

  if (NODE_ENV === 'dev') {
    return (origin = `${HOST}:${PORT}`);
  }

  return (origin = `${HOST}`);
};

export { checkOrigin };
