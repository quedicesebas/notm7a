const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const files = ['encuestamovilidad_brutalist.webp', 'costo_km_brutalist.webp', 'arbol_talado_icon.webp', 'septima_brutalist.webp'];
files.forEach(file => {
  const filePath = path.join('public', file);
  const tempPath = path.join('public', 'temp_' + file);
  sharp(filePath).resize(500).webp({ quality: 80 }).toFile(tempPath).then(() => {
    fs.renameSync(tempPath, filePath);
    console.log('Resized', file);
  }).catch(err => console.error(err));
});
