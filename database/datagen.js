const fs = require('fs');
const faker = require('faker');

// insert the string 'house' or 'interior'
const imageGen = (imageType) => {
  const imageRandom = Math.floor(Math.random() * 1000) + 1;
  const str = `${imageRandom}`;
  const pad = '0000';
  const imageNumber = pad.substring(0, pad.length - str.length) + str;
  return `https://cabin-gallery.s3-us-west-1.amazonaws.com/${imageType}-${imageNumber}.jpg`;
};
const images = [];

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 6; j++) {
    const image = [];
    const listingid = i + 1;
    const url = imageGen();
    const caption = faker.lorem.words();
    const verified = Math.round(Math.random());
    image.push(listingid, url, caption, verified);
    images.push(image);
  }
}
console.log(images);


// image.push(listingid, url, caption, verified); //each image
// images.push(image); // array of all images
