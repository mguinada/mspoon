<template lang='html'>
  <div class='recipe-detail'>
    <p class='title'>{{ title }}</p>
    <div class='thumb'>
      <img :src='image'>
    </div>
    <ul class='tags'>
      <li class='tag' v-for='tag in tags' :key='tag'>{{ tag }}</li>
    </ul>
    <p class='description'>{{ description }}</p>
    <p class='chef'>{{ chef }}</p>
  </div>
</template>

<script>
export default {
  name: 'recipeDetail',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  computed: {
    title () {
      return this.recipe.fields.title
    },
    image () {
      return this.recipe.fields.photo.fields.file.url
    },
    description () {
      return this.recipe.fields.description
    },
    chef () {
      return this.recipe.fields.chef.fields.name
    },
    tags () {
      return this.recipe.fields.tags.map((t) => { return t.fields.name })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
