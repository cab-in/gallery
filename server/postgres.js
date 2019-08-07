/* eslint-disable camelcase */
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

// don't need for the current app
const createImage = (request, response) => {
  const {
    imageurl, caption, verified,
  } = request.body;
  console.log(request.body);

  pool.query('INSERT INTO gallery_schema.images (imageid, listing_id, imageurl, caption, verified) VALUES ($1, $2, $3, $4, $5)', [request.params.imageid, request.params.listingid, imageurl, caption, verified], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Image added with ID: ${results.insertId}`);
  });
};

// don't need for the current app
const updateImage = (request, response) => {
  pool.query(
    'SELECT * FROM gallery_schema.images WHERE listing_id= $1', [request.params.listingid],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(200).send('Image modified');
    },
  );
};

// don't need for the current app
const deleteImage = (request, response) => {
  pool.query('DELETE FROM gallery_schema.images WHERE imageid = $1', [request.params.imageid], (error) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Image deleted with ID: ${request.params.imageid}`);
  });
};

module.exports = {
  getImages,
  createImage,
  updateImage,
  deleteImage,
};
