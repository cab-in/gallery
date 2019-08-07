/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const controllers = require('./postgres');

const app = express();
const port = process.env.PORT || 3003;


app.use('/rooms/:listingid', express.static(path.join(__dirname, '../public')));

app.get('/api/:listingid/images', cors(), controllers.getImages);

app.listen(port, () => { console.log(`Listening on port ${port}`); });
