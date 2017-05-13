const test = require('tape');
const path = require('path');
const imageToRgbaMatrix = require('./');

test('image-to-rgba-matrix', t => {
    t.plan(1);

    const expectedRgbaMatrix = [
        [[255, 0, 0, 255], [0, 255, 0, 255]],
        [[0, 0, 255, 255], [255, 255, 255, 0]]
    ];

    imageToRgbaMatrix(path.resolve(__dirname, './test.png'))
    .then(rgbaMatrix => {
        t.deepEqual(rgbaMatrix, expectedRgbaMatrix);
        t.end();
    })
    .catch(t.end);
});
