# Cab.in Gallery Module

> Project description

## API
### Get all images
Gets all images of a listing.

Method | Required
--- | ---
GET | listingid=[integer]

**URL**
```
/api/:listingid/images
```

### Post an image
Posts an image into a listing's image group.

Method | Required
--- | ---
POST | listingid=[integer]

**URL**
```
POST /api/:listingid/images
```

### Update an image
Update an image of a listing.

Method | Required
--- | ---
PUT | listingid=[integer], imageid=[integer]

**URL**
```
PUT /api/:listingid/images/:imageid
```

<!-- ### Update an image
Update an image of a listing.
```
PATCH /api/:listingid/images/:imageid
``` -->

### Delete an image
Delete an image in a listing depending on image id.

Method | Required
--- | ---
DELETE | listingid=[integer], imageid=[integer]

**URL**
```
DELETE /api/:listingid/images/:imageid
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

