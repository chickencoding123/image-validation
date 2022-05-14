/** The regex to detect if base64 string contains browser specific data image instruction */
export const IMG_DATA_REGEX = /^data:image\/\w{2,5};base64,/i

export type ImageValidationDomSrc = string | File

export type ImageValidationNodeSrc = Buffer | Uint8Array | Uint8ClampedArray | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array | string

export interface ImageValidationConfig {
  throw: boolean
}

export function failure(config: ImageValidationConfig, resolve: (value: boolean) => void, reject: (reason: Error) => void) {
  return config?.throw
    ? reject(new Error('The media resource is either invalid, corrupt or not usable.'))
    : resolve(false)
}
