import Fs from 'fs'
import Path from 'path'
import ImageValidation from './validateInNode'

const avatar = Fs.readFileSync(Path.resolve(__dirname, '..', 'fixtures', 'avatar.png'))
const corrupt = Fs.readFileSync(Path.resolve(__dirname, '..', 'fixtures', 'avatar-corrupt.png'))

it('can decode a valid image', async () => {
  const result = await ImageValidation(avatar)
  expect(result).toBeTruthy()
})

it('throws for invalid images by default', async () => {
  ImageValidation(corrupt).catch((err) => expect(err).toBeInstanceOf(Error))
})

it('does NOT throw when configuration prevents throwing on error', async () => {
  const result = await ImageValidation(corrupt, { throw: false })
  expect(result).toBeFalsy()
})
