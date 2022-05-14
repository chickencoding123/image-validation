import sharp from 'sharp'
import { failure, ImageValidationConfig, ImageValidationNodeSrc, IMG_DATA_REGEX } from './shared'

const ImageValidation = (src: ImageValidationNodeSrc, config: ImageValidationConfig = { throw: true }) => {
  return new Promise<boolean>((resolve, reject) => {
    let source
    if (typeof src === 'string') {
      if (IMG_DATA_REGEX.test(src)) {
        source = Buffer.from((src as string).replace(IMG_DATA_REGEX, ''), 'base64')
      } else {
        source = Buffer.from(src as string, 'base64')
      }
    } else {
      source = src
    }
    if (src instanceof Buffer && !src[0]) failure(config, resolve, reject)
    return sharp(source)
      .resize(52, 52)
      .toBuffer((err) => {
        if (!err) resolve(true)
        else failure(config, resolve, reject)
      })
  })
}

export default ImageValidation