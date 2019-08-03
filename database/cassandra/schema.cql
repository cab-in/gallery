DROP KEYSPACE IF EXISTS gallery;
CREATE KEYSPACE IF NOT EXISTS gallery
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE gallery;

CREATE TABLE images (
  image_id int,
  listing_id int,
  image_url text,
  caption text,
  verified int,
  PRIMARY KEY (listing_id, image_id)
);



-- CREATE TABLE images (
--   image_id int,
--   listing_id int,
--   image_url text,
--   caption text,
--   verified int,
--   PRIMARY KEY (image_id)
-- );

-- cqlsh -f ./database/cassandra/schema.cql

-- \copy gallery_schema.images(image_id, listing_id, image_url, caption, verified) from '/Users/macbookpro/Documents/hrprep/precourse/gallery/database/datagen/csv/gallerySample.csv' DELIMITER ',' CSV HEADER


-- COPY gallery.images (image_id, listing_id, image_url, caption, verified) from '/Users/macbookpro/Documents/hrprep/precourse/gallery/database/datagen/csv/imagesSample.csv'
-- WITH
-- CHUNKSIZE=5000 AND
-- MINBATCHSIZE=10 AND
-- PREPAREDSTATEMENTS=True AND
-- HEADER=True AND
-- NUMPROCESSES=2;


-- COPY gallery.images (image_id, listing_id, image_url, caption, verified) from '/Users/macbookpro/Documents/hrprep/precourse/gallery/database/datagen/csv/images.csv'
-- WITH
-- CHUNKSIZE=5000 AND
-- MINBATCHSIZE=10 AND
-- PREPAREDSTATEMENTS=True AND
-- HEADER=True AND
-- NUMPROCESSES=2;


-- SELECT * FROM images WHERE listing_id = 999 AND priority >= 5;

