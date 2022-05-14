import { failure, ImageValidationConfig, ImageValidationDomSrc, IMG_DATA_REGEX } from "./shared"

const ImageValidation = (src: ImageValidationDomSrc, config: ImageValidationConfig = { throw: true }) => {
  let url = ''
  if (typeof src === 'string') {
    if (!IMG_DATA_REGEX.test(src)) {
      url = 'data:image/jpeg;base64,' + src
    } else {
      url = src
    }
  } else {
    url = URL.createObjectURL(src)
  }

  const image = new Image()

  return new Promise<boolean>((resolve, reject) => {
    image.addEventListener('error', () => {
      failure(config, resolve, reject)
    })
    image.addEventListener('load', () => {
      resolve(true)
    }, false)
    image.src = url
  })
}

export default ImageValidation