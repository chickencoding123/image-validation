image-validation
======

<div align="center">

Image validation utility for DOM and Node.js beyond the file extensions

[![npm](https://img.shields.io/npm/v/image-validation)](https://www.npmjs.com/package/image-validation) [![License](https://img.shields.io/npm/l/image-validation)](https://github.com/chickencoding123/image-validation/blob/main/LICENSE)


</div>

## Features
- Validate images in various input formats
- Validate based on image data instead of file extension
- Runs in browser or [node.js](https://nodejs.org)
- Graceful mode (optional) for failed images
- Comes with CLI

## How to use
```sh
npm i image-validation
# or
yarn add image-validation
```

```js
const imageValidation = require('image-validation').default
// or
const { default: imageValidation } = require('image-validation')
// or
import ImageValidation from 'image-validation'
```
Very simple to run:
```js
// then
ImageValidation('image base64 string, arrays, buffer etc...')
  .then(result => {
    // result is either true or false
  })
// or
const result = await ImageValidation('image base64 string, arrays, buffer etc...')
```

## Configure throwing error or returning false
By default the validation will throw an error for an invalid/corrupt image, but this can be changed to return `false` and fail gracefully.
```js
const result = await ImageValidation('image base64 string, arrays, buffer etc...', { throw: false })
```

## Why?
Allows you to detect image corruption automatically which is very useful in workflows. Technically the image corruption must be fixed at source, but this is not always a possibility. In the future I'd like to add security scanning for metadata exploits and such.