import client from './client.js'

var extrude = function (property, promise) {
  return new Promise((resolve) => {
    promise.then((response) => {
      resolve(response[property])
    })
  })
}

export default {
  recipes () {
    return extrude('items', client.getEntries({ content_type: 'recipe' }))
  }
}
