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

const { storeFile, storePassword } = properties;

const store = Keytool(path.join(PWD, `android/app/${storeFile}`), storePassword, {
  debug: false,
  storetype: 'PKCS12',
});

const printlist = (err, res) => {
  if (err) {
    console.log('Error listing keystore content', err);
    return;
  }

  for (var certidx = 0; certidx < res.certs.length; certidx++) {
    var resobj = res.certs[certidx];
    console.log(
      '#' + certidx,
      resobj.certtype,
      '(' + resobj.issued + ')',
      resobj.alias,
      resobj.algorithm,
      resobj.fingerprint,
    );
  }
};

store.list(printlist);
