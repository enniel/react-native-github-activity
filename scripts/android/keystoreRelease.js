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

const { storeFile, storePassword, keyAlias, keyPassword } = properties;

const store = Keytool(path.join(PWD, `android/app/${storeFile}`), storePassword, {
  debug: false,
  storetype: 'PKCS12',
});

const dname = 'CN=' + keyAlias;
const validity = 10000;
const keysize = 2048;
const keyalg = 'RSA';
const validFrom = new Date();

store.genkeypair(
  keyAlias,
  keyPassword,
  dname,
  validity,
  keysize,
  keyalg,
  null,
  null,
  validFrom,
  (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('alias', res.alias, 'created');
  },
);
