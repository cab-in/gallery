const axios = require('axios');
// const key = require('../config.js')

module.exports = {
  getImages: (query, page, cb) => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&page=${page}`;
    axios.get(url, { headers: { Authorization: 'Client-ID 7800824348e38cf42eca595a0e6d22cbfa65ced9567588246aa763482bb61e40' } })
      .then((response) => {
        cb(null, response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
