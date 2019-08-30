import client from './client.js';

var filterData = function(clientOperation, property = 'items') {
  return new Promise((resolve) => {
     clientOperation.then((response) => {
       resolve(response[property]);
     });
   });
}

export default {
  recipes() {
    return filterData(client.getEntries({content_type: 'recipe'}));
  }
}
