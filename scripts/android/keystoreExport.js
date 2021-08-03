const fs = require('fs');
const path = require('path');
const Keytool = require('@expo/node-keytool');

const PWD = process.env.PWD;

const text = fs.readFileSync(path.join(PWD, 'android/keystore.properties'), 'utf8');

const properties = text.split('\n').reduce((result, line) => {
  const [key, value] = line.split('=');
  result[key] = value;
  return result;
}, {});

const { storeFile, pemFile, storePassword, keyAlias } = properties;

const store = Keytool(path.join(PWD, `android/app/${storeFile}`), storePassword, {
  debug: false,
  storetype: 'PKCS12',
});

const exportCallback = (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res);
};

store.exportcert(keyAlias, path.join(PWD, `android/app/${pemFile}`), true, exportCallback);
