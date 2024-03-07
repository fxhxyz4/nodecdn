const npmWorker = (name, version, file) => {
  console.log(`${name}@${version}/${file}`);
  return true;
};

export { npmWorker };
