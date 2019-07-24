# Cab.in Gallery Module

> Project description

## API
### Get all images
Gets all images of a listing.

Method | URL | Required
--- | --- | ---
GET | /api/:listingid/images | listingid=[integer]


### Post an image
Posts an image into a listing's image group.

Method | URL | Required
--- | --- | ---
POST | /api/:listingid/images | listingid=[integer]


### Update an image
Update an image of a listing.

Method | URL | Required
--- | --- | ---
PUT | /api/:listingid/images/:imageid | listingid=[integer], imageid=[integer]

<!-- ### Update an image
Update an image of a listing.
```
PATCH /api/:listingid/images/:imageid
``` -->

### Delete an image
Delete an image in a listing depending on image id.

Method | URL | Required
--- | --- | ---
DELETE | DELETE /api/:listingid/images/:imageid | listingid=[integer], imageid=[integer]




## Related Projects

  - https://github.com/bedroost/review
  - https://github.com/bedroost/description
  - https://github.com/bedroost/booking

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> npm install

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

