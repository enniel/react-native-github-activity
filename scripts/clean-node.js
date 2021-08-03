const fs = require('fs');
const path = require('path');

const PWD = process.env.PWD;

const paths = ['node_modules', 'package-lock.json', 'yarn.lock'];

paths.forEach(p => {
  const fullPath = path.join(PWD, p);

  if (fs.existsSync(fullPath)) {
    const stat = fs.lstatSync(fullPath);
    const method = stat.isDirectory() ? 'rmdirSync' : 'rmSync';
    fs[method](fullPath, { recursive: true });
  }

  console.info(`${fullPath} - ok`);
});
