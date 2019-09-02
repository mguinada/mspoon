module.exports = {
  'Visit the recipe list': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('.recipe', 5000)
      .assert.containsText('.recipes', 'Crispy Chicken and Rice with Peas & Arugula Salad')
      .assert.containsText('.recipes', 'White Cheddar Grilled Cheese with Cherry Preserves & Basil')
      .assert.containsText('.recipes', 'Tofu Saag Paneer with Buttery Toasted Pita')
      .assert.containsText('.recipes', 'Grilled Steak & Vegetables with Cilantro-Jalapeño Dressing')
      .assert.elementCount('img[src^="//images.ctfassets.net/"]', 4)
      .end()
  },
  'Visit a recipe detail': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('.recipe', 5000)
      .assert.containsText('.recipes', 'Crispy Chicken and Rice with Peas & Arugula Salad')
      .click('.recipes a:first-child')
      .waitForElementVisible('.recipe-detail', 5000)
      .assert.containsText('.title', 'Crispy Chicken and Rice with Peas & Arugula Salad')
      .assert.containsText('.description', 'Crispy chicken skin, tender meat, and rich, tomatoey sauce form a winning trifecta of delicious in this one-pot braise. We spoon it over rice and peas to soak up every last drop of goodness, and serve a tangy arugula salad alongside for a vibrant boost of flavor and color. Dinner is served! Cook, relax, and enjoy!')
      .assert.containsText('.chef', 'Jony Chives')
      .assert.containsText('.tags', 'gluten free')
      .assert.containsText('.tags', 'healthy')
      .assert.elementCount('img[src^="//images.ctfassets.net/"]', 1)
      .end()
  }
}
