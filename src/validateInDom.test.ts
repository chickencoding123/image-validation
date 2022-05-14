import ImageValidation from './validateInDom'

const avatar = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABRUlEQVR4nO3bMW7CQBBA0Tiioci10qbNDckZuFZapHADw2ez2Ejv9basrymG1bKcjsc37vO+9Qe8ErECsQKxArECsQKxArECsYLl7/L18MM/H+d//JTn+P79fPhZkxWIFYgViBWIFYgViBWIFYgVLM7g72eyArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxgsO8V4/cVxkx726PyQrECsQKxArECsQKxArECsQKbtyimbeFj+zZW32VyQrECsQKxArECsQKxArECsQKJp7Br2/DI1v4vDevM1mBWIFYgViBWIFYgViBWIFYwWa3aPZ5Br/OZAViBWIFYgViBWIFYgViBWIFNzb4rU675xn55WCyArECsQKxArECsQKxArECsYKhM/h97vf+yboLYgViBWIFYgViBWIFYgViBVdd+SSzMNoqqgAAAABJRU5ErkJggg=='
const corrupt = 'corruptedVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABRUlEQVR4nO3bMW7CQBBA0Tiioci10qbNDckZuFZapHADw2ez2Ejv9basrymG1bKcjsc37vO+9Qe8ErECsQKxArECsQKxArECsYLl7/L18MM/H+d//JTn+P79fPhZkxWIFYgViBWIFYgViBWIFYgVLM7g72eyArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxArECsQKxgsO8V4/cVxkx726PyQrECsQKxArECsQKxArECsQKbtyimbeFj+zZW32VyQrECsQKxArECsQKxArECsQKJp7Br2/DI1v4vDevM1mBWIFYgViBWIFYgViBWIFYwWa3aPZ5Br/OZAViBWIFYgViBWIFYgViBWIFNzb4rU675xn55WCyArECsQKxArECsQKxArECsYKhM/h97vf+yboLYgViBWIFYgViBWIFYgViBVdd+SSzMNoqqgAAAABJRU5ErkJggg=='

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
