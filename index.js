'use strict';
const Jimp = require('jimp');

const readImage = imageSrc => {
  return Jimp.read(imageSrc);
}

const scanToRgbaMatrix = jimpImage => {
  const rgbaMatrix = [];

  const pixelHandler = (x, y, idx) => {
    var green = jimpImage.bitmap.data[ idx + 1 ];
    var red   = jimpImage.bitmap.data[ idx + 0 ];
    var blue  = jimpImage.bitmap.data[ idx + 2 ];
    var alpha = jimpImage.bitmap.data[ idx + 3 ];
    
    if (!rgbaMatrix[y]) {
      rgbaMatrix[y] = []
    }
    
    rgbaMatrix[y][x] = [red, green, blue, alpha];
  }
  
  jimpImage.scan(
    0,
    0,
    jimpImage.bitmap.width,
    jimpImage.bitmap.height,
    pixelHandler.bind(this)
  );
  
  return rgbaMatrix
}

const imageToRgbaMatrix = imageSrc => {
  return readImage(imageSrc)
    .then(scanToRgbaMatrix);
}

module.exports = imageToRgbaMatrix;