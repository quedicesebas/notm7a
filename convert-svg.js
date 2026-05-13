const sharp = require('sharp');
sharp('public/crowd-silhouette.svg').webp({ quality: 80 }).toFile('public/crowd-silhouette.webp').then(() => console.log('Done')).catch(err => console.error(err));
