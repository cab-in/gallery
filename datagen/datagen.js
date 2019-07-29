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

// helper function for writeGallery
// accepts 'house' or 'interior' argument
const imageGen = (imageType) => {
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

const writeGallery = async () => {
  const headerForGallery = 'id,listingId,imageUrl,caption,verified\n';
  const fileStream1 = fs.createWriteStream('./csv/gallery.csv');
  write(fileStream1, headerForGallery);
  const max = 10000000;
  let listingId = 1;
  let id = 1;
  while (listingId <= max) {
    let numberOfImages = 0;
    // if decide to add some variation - faker.random.number({min:4, max:8});
    while (numberOfImages < 6) {
      let url = '';
      // only first image of a listing has house image, the rest are interior
      if (numberOfImages === 0) {
        url = imageGen('house');
      } else {
        url = imageGen('interior');
      }
      const caption = faker.lorem.words();
      const verified = Math.round(Math.random());
      const newWrite = `${id},${listingId},${url},${caption},${verified}\n`;
      id += 1;
      const promise = write(fileStream1, newWrite);
      if (promise) {
        await promise;
      }
      numberOfImages += 1;
    }
    listingId += 1;
  }
};

const writeListings = async () => {
  const headerForListings = 'listingId\n';
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
writeGallery();
