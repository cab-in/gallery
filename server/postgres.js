/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
const Pool = require('pg').Pool;
const { client } = require('./redis');

const pool = new Pool({
  user: 'power_user',
  host: '52.53.163.44',
  database: 'gallery',
  password: '$poweruserpassword',
  port: 5432,
});


pool.connect((err) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('connected to postgres');
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const queryDb = async (q) => {
  try {
    const result = await pool.query(q);
    // console.log(result.rows, 'rows');
    return result.rows;
  } catch (err) {
    console.log(err.stack);
    return null;
  }
};

const getImages = async (req, res) => {
  const result = await queryDb(`SELECT * FROM gallery_schema.images WHERE listing_id= ${req.params.listingid}`);
  client.set(req.method + req.originalUrl, JSON.stringify(result));
  return (result ? res.send(result) : res.sendStatus(404));
};


// const getImages = (request, response) => {
//   pool.query('SELECT * FROM gallery_schema.images WHERE listing_id= $1', [request.params.listingid], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// don't need for the current app
// const createImage = (request, response) => {
//   const {
//     imageurl, caption, verified,
//   } = request.body;
//   console.log(request.body);

//   pool.query('INSERT INTO gallery_schema.images (imageid, listing_id, imageurl, caption, verified) VALUES ($1, $2, $3, $4, $5)', [request.params.imageid, request.params.listingid, imageurl, caption, verified], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(201).send(`Image added with ID: ${results.insertId}`);
//   });
// };

// // don't need for the current app
// const updateImage = (request, response) => {
//   pool.query(
//     'SELECT * FROM gallery_schema.images WHERE listing_id= $1', [request.params.listingid],
//     (error) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send('Image modified');
//     },
//   );
// };

// // don't need for the current app
// const deleteImage = (request, response) => {
//   pool.query('DELETE FROM gallery_schema.images WHERE imageid = $1', [request.params.imageid], (error) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`Image deleted with ID: ${request.params.imageid}`);
//   });
// };

module.exports = {
  getImages,
  // createImage,
  // updateImage,
  // deleteImage,
};
