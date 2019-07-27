const fs = require('fs');
const faker = require('faker');


const imageRandom = Math.floor(Math.random() * 1000) + 1;
const str = `${imageRandom}`;
const pad = '0000';
const imageNumber = pad.substring(0, pad.length - str.length) + str;
const imageURL = `https://cabin-gallery.s3-us-west-1.amazonaws.com/house-${imageNumber}.jpg`;

console.log(imageURL);

image.push(listingid, url, caption, verified);
images.push(image);
