import { api } from '../../package.json'
import { createClient } from 'contentful'

const client = createClient({
  accessToken: api.accessToken,
  space: api.spaceId
})

export default client
