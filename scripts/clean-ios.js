const fs = require('fs');
const path = require('path');

const PWD = process.env.PWD;

const { name } = require(path.join(PWD, 'app.json'));

const paths = [
  'ios/Podfile.lock',
  'ios/Pods',
  'ios/build',
  `ios/${name}.xcworkspace/xcshareddata`,
  `ios/${name}.xcworkspace/xcuserdata`,
  `ios/${name}.xcodeproj/project.xcworkspace`,
  `ios/${name}.xcodeproj/xcshareddata`,
  `ios/${name}.xcodeproj/project.pbxproj`,
];

paths.forEach(p => {
  const fullPath = path.join(PWD, p);

  if (fs.existsSync(fullPath)) {
    const stat = fs.lstatSync(fullPath);
    const method = stat.isDirectory() ? 'rmdirSync' : 'rmSync';
    fs[method](fullPath, { recursive: true });
  }

  console.info(`${fullPath} - ok`);
});
