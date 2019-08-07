-- CREATE ROLE root WITH SUPERUSER;
-- psql postgres -f ./postgresql/schema.sql

-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA gallery_schema TO foobar;


DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;
\connect gallery root;

DROP SCHEMA IF EXISTS gallery_schema CASCADE;
CREATE SCHEMA IF NOT EXISTS gallery_schema AUTHORIZATION "root";

CREATE TABLE gallery_schema.listings (
  listingID SERIAL PRIMARY KEY
);

CREATE TABLE gallery_schema.images (
  ImageID SERIAL PRIMARY KEY,
  listing_id INTEGER,
  ImageUrl TEXT,
  Caption TEXT,
  Verified INTEGER
);

CREATE INDEX listing_id_index ON images(listing_id);


-- \copy gallery_schema.listings(listingID) from '/Users/macbookpro/Documents/hrprep/precourse/gallery/database/datagen/csv/listings.csv' DELIMITER ',' CSV HEADER

-- \copy gallery_schema.images(ImageID, listing_id, ImageUrl, Caption, Verified) from '/Users/macbookpro/Documents/hrprep/precourse/gallery/database/datagen/csv/images.csv' DELIMITER ',' CSV HEADER

ALTER TABLE gallery_schema.images
ADD CONSTRAINT fk_listing_id FOREIGN KEY (listing_id) REFERENCES gallery_schema.listings (listingID);

ANALYZE;


CREATE INDEX index_images_listing_id ON images USING btree (listing_id);

-- original names/formatting of legacy tables
-- listingID, title
-- listing_id, ImageID, ImageUrl, Caption, Verified