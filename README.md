# image-to-rgba-matrix

> Convert an image into a RGBA matrix.

## install

    $ yarn add @bencevans/image-to-rgba-matrix

## usage

```js
// ES5
const imageToRgbaMatrix = require('@bencevans/image-to-rgba-matrix');

// ES6
import imageToRgbaMatrix from '@bencevans/image-to-rgba-matrix';

// From file path
imageToRgbaMatrix('./path-to-image').then(console.log);

// From image (png/jpg/bmp) buffer
imageToRgbaMatrix(imageBuf).then(console.log);

// From url
imageToRgbaMatrix('http://bencevans.io/avatar.jpg').then(console.log);
```

## licence

MIT &copy; [Ben Evans](https://bencevans.io)