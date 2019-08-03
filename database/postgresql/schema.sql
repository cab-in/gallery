-- CREATE ROLE root WITH SUPERUSER;
-- psql postgres -f ./postgresql/schema.sql

DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;
\connect gallery root;

CREATE TABLE listings (
  listing_id SERIAL PRIMARY KEY
);

CREATE TABLE images (
  image_id SERIAL PRIMARY KEY,
  listing_id INTEGER,
  image_url TEXT,
  caption TEXT,
  verified INTEGER
);

CREATE INDEX listing_id_index ON images(listing_id);

-- \copy listings(listing_id) from '/Users/macbookpro/Documents/hrprep/precourse/gallery/database/datagen/csv/listings.csv' DELIMITER ',' CSV HEADER

-- \copy images(image_id, listing_id, image_url, caption, verified) from '/Users/macbookpro/Documents/hrprep/precourse/gallery/database/datagen/csv/images.csv' DELIMITER ',' CSV HEADER

ALTER TABLE review_dish
ADD CONSTRAINT fk_listing_id FOREIGN KEY (listing_id) REFERENCES listings (listing_id);

ANALYZE;

