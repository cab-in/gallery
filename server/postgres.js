/* eslint-disable prefer-destructuring */
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'foobar',
  host: 'localhost',
  database: 'gallery',
  password: 'password',
  port: 5432,
});


const getImages = (request, response) => {
  pool.query('SELECT * FROM gallery_schema.images WHERE listing_id= $1', [request.params.listingid], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getImages,
};
