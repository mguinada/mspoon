import client from './client.js'

var extrude = function (property, promise) {
  return new Promise((resolve) => {
    promise.then((response) => {
      resolve(response[property])
    })
  })
}

const entry = 'recipe'

export default {
  recipes () {
    return extrude('items', client.getEntries({ 'content_type': entry }))
  },
  recipe (id) {
    return extrude('items', client.getEntries({ 'content_type': entry, 'sys.id': id }))
  }
}
