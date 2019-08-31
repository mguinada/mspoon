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
      .end();
  },
};
