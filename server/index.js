/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const controllers = require('./postgres');
// const { cache } = require('./redis');

const app = express();
const port = process.env.PORT || 3003;


app.use('/rooms/:listingid', express.static(path.join(__dirname, '../public')));

app.get('/api/:listingid/images', controllers.getImages);

// don't need any of this for the current app
// app.post('/api/:listingid/images', controllers.createImage);
// app.put('/api/:listingid/images/:imageid', controllers.updateImage);
// app.delete('/api/:listingid/images/:imageid', controllers.deleteImage);

app.listen(port, () => { console.log(`Listening on port ${port}`); });
