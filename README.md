# image-to-rgba-matrix

> Convert an image into a RGBA matrix.

## Install

    $ yarn add image-to-rgba-matrix

    $ npm install --save image-to-rgba-matrix

## Usage

```js
// ES5
const imageToRgbaMatrix = require('image-to-rgba-matrix');

// ES6
import imageToRgbaMatrix from 'image-to-rgba-matrix';

// From file path
imageToRgbaMatrix('./path-to-image').then(console.log);

// From image (png/jpg/bmp) buffer
imageToRgbaMatrix(imageBuf).then(console.log);

// From url
imageToRgbaMatrix('http://bencevans.io/avatar.jpg').then(console.log);
```

## Licence

MIT &copy; [Ben Evans](https://bencevans.io)
