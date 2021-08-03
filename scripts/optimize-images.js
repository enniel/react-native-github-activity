const { optimizeZopfliPng } = require('node-zopflipng');
const { readFile, writeFile } = require('fs/promises');

const path = require('path');

const PWD = process.env.PWD;

const RES_PATH = path.join(PWD, 'android/app/src/main/res');

const files = [
  'mipmap-hdpi/ic_launcher.png',
  'mipmap-hdpi/ic_launcher_round.png',
  'mipmap-mdpi/ic_launcher.png',
  'mipmap-mdpi/ic_launcher_round.png',
  'mipmap-xhdpi/ic_launcher.png',
  'mipmap-xhdpi/ic_launcher_round.png',
  'mipmap-xxhdpi/ic_launcher.png',
  'mipmap-xxhdpi/ic_launcher_round.png',
  'mipmap-xxxhdpi/ic_launcher.png',
  'mipmap-xxxhdpi/ic_launcher_round.png',
];

const promises = [];
files.forEach(file => {
  const fullPath = path.join(RES_PATH, file);
  const promise = readFile(fullPath)
    .then(buffer => optimizeZopfliPng(buffer))
    .then(buffer => writeFile(fullPath, buffer));
  promises.push(promise);
});

Promise.all(promises)
  .then(() => {
    console.log('Files optimized!!!');
  })
  .catch(console.error);
