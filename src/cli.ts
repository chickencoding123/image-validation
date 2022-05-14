#!/usr/bin/env node

import Fs from 'fs'
import Path from 'path'
import ImageValidation from './validateInNode'

const args = process.argv
if (!args || args.length !== 3) {
  throw Error('IMAGE-VALIDATION: the CLI requires a single parameter which is a string path to an image file.')
}

const path = Path.resolve(__dirname, args[2])
if (!Fs.existsSync(path)) {
  throw Error(`IMAGE-VALIDATION: the CLI did not find the image file at "${path}".`)
}

const buffer = Fs.readFileSync(path)
ImageValidation(buffer, { throw: false }).then(result => {
  if (result) { process.exit(0) }
  else console.error(`IMAGE-VALIDATION: failed for image at "${path}"`)
})