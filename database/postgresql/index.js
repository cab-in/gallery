/* eslint-disable no-unused-vars */
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'database-user',
  database: 'gallery',
  password: '',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const images = 'CREATE TABLE IF NOT EXISTS images (id SERIAL PRIMARY KEY, listingId INTEGER NOT NULL, url TEXT NOT NULL, caption TEXT NOT NULL, verified INTEGER)';

const listings = 'CREATE TABLE IF NOT EXISTS listings (listingId SERIAL PRIMARY KEY)';

module.exports = pool;
