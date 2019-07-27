const fs = require('fs');
const faker = require('faker');

function write() {
  return new Promise((resolve) => {
    fileStream.once('drain', resolve);
  });
}

// insert the string 'house' or 'interior'
const imageGen = (imageType) => {
  const imageRandom = Math.floor(Math.random() * 500) + 1;
  const str = `${imageRandom}`;
  const pad = '000';
  const imageNumber = pad.substring(0, pad.length - str.length) + str;
  return `https://cabin-gallery.s3-us-west-1.amazonaws.com/${imageType}-${imageNumber}.jpg`;
};

async function writeGallery() {
  const fileStream = fs.createWriteStream('./gallery.csv');
  let newWrite = true;
  // Write galleries for 10 million listings
  let id = 1;
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 6; j += 1) {
      const listingid = i + 1;
      let url = '';
      // only first image of a listing has house image, the rest are interior
      if (j === 0) {
        url = imageGen('house');
      } else {
        url = imageGen('interior');
      }
      const caption = faker.lorem.words();
      const verified = Math.round(Math.random());

      newWrite = fileStream.write(`${id},${listingid},${url},${caption},${verified}\n`);
      id += 1;
      if (!newWrite) {
        await write();
      }
    }
  }
  fileStream.end();
}

async function writeListings() {
  const fileStream = fs.createWriteStream('listings.csv');
  let newWrite = true;
  // Write 10 million listings
  for (let i = 0; i < 10; i += 1) {
    const listingid = i + 1;

    newWrite = fileStream.write(`${listingid}\n`);

    if (!newWrite) {
      await write();
    }
  }
  fileStream.end();
}


writeGallery();
writeListings();
