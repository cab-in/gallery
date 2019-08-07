/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
const fs = require('fs');
const faker = require('faker');

const write = (writer, data) => {
  if (!writer.write(data)) {
    return new Promise((resolve) => {
      writer.once('drain', resolve);
    });
  }
};

// helper function for writeImages
// accepts 'house' or 'interior' argument
const imageUrlGen = (imageType) => {
  let imageRandom = 0;
  // interior photos have larger range of possible images
  if (imageType === 'interior') {
    imageRandom = Math.floor(Math.random() * 800) + 1;
  } else {
    imageRandom = Math.floor(Math.random() * 200) + 1;
  }
  const str = `${imageRandom}`;
  const pad = '000';
  const imageNumber = pad.substring(0, pad.length - str.length) + str;
  return `https://cabin-gallery.s3-us-west-1.amazonaws.com/${imageType}-${imageNumber}.jpg`;
};

const writeImages = async () => {
  const headerForImages = 'ImageID,listing_id,ImageUrl,Caption,Verified\n';
  const fileStream1 = fs.createWriteStream('./csv/images.csv');
  write(fileStream1, headerForImages);
  const max = 10000000;
  let listingId = 1;
  let imageId = 1;
  while (listingId <= max) {
    let madeImages = 0;
    let numberOfImages = 0;
    const randomValue = Math.random();
    if (randomValue < 0.9) {
      numberOfImages = 6;
    } else {
      numberOfImages = faker.random.number({ min: 5, max: 20 });
    }
    while (madeImages < numberOfImages) {
      let url = '';
      // only first image of a listing has house image, the rest are interior
      if (madeImages === 0) {
        url = imageUrlGen('house');
      } else {
        url = imageUrlGen('interior');
      }
      const caption = faker.lorem.words();
      const verified = Math.round(Math.random());
      const newWrite = `${imageId},${listingId},${url},${caption},${verified}\n`;
      imageId += 1;
      const promise = write(fileStream1, newWrite);
      if (promise) {
        await promise;
      }
      madeImages += 1;
    }
    listingId += 1;
  }
};

const writeListings = async () => {
  const headerForListings = 'listingID\n';
  const fileStream2 = fs.createWriteStream('./csv/listings.csv');
  write(fileStream2, headerForListings);
  const max = 10000000;
  let listingId = 1;
  while (listingId <= max) {
    const newWrite = `${listingId}\n`;
    const promise = write(fileStream2, newWrite);
    if (promise) {
      await promise;
    }
    listingId += 1;
  }
};

writeListings();
writeImages();
