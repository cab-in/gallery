# Bedroost Gallery Module

> Project description

## API
### Get all images
Gets all images of a listing as identified by the listingid
```
GET /api/:listingid/images
```

### Post an image
Posts an image into a listing's image group
```
POST /api/:listingid/images
```

### Update a single image
Update an image into a listing's image group
```
PUT /api/:listingid/images/:imageid
```

### Update image(s)
Update a single or group of image(s) of a listing.
```
PATCH /api/:listingid/images/:imageid
```

### Delete an image
Delete an image in a listing depending on image id.
```
PATCH /api/:listingid/images/:imageid
```



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

