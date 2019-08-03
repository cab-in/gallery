/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
const fs = require('fs');
const request = require('request');
const unsplash = require('./unsplashHelper.js');

// let pageNumber = 17; pageNumber < 18 --this was the max to get 510 images
// let pageNumber = 25; pageNumber < 26; pageNumber += 1 -- this got to 750 images
// let pageNumber = 9; pageNumber < 10; pageNumber += 1) -- 270 images
for (let pageNumber = 1; pageNumber < 28; pageNumber += 1) {
  // max 30 imageNumber per page
  for (let imageNumber = 0; imageNumber < 30; imageNumber += 1) {
    unsplash.getImages('interior', pageNumber, (err, houseData) => {
      if (err) {
        console.log(err);
      } else {
        const download = function (uri, filename, callback) {
          request.head(uri, function (res) {
            console.log(houseData.results[imageNumber].urls.regular);
            console.log('content-type:', res.headers['content-type']);
            console.log('content-length:', res.headers['content-length']);
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        const str = `${imageNumber + 1 + 30 * (pageNumber - 1)}`;
        const pad = '000';
        const paddedImageNumber = pad.substring(0, pad.length - str.length) + str;
        download(houseData.results[imageNumber].urls.regular, `interior-${paddedImageNumber}.jpg`, function () {
          console.log(`interior-${paddedImageNumber}.jpg saved`);
        });
      }
    });
  }
}
