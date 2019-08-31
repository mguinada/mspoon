<template lang='html'>
  <div class='recipe-detail'>
    <p class='title'>{{ title }}</p>
    <div class='thumb'>
      <img :src='image'>
    </div>
    <ul class='tags'>
      <li class='tag' v-for='tag in tags' :key='tag'>{{ tag }}</li>
    </ul>
    <p class='description'>
      <vue-simple-markdown :source='description'></vue-simple-markdown>
    </p>
    <p v-show='chef' class='chef'>by <span>{{ chef }}</span></p>
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
      if (this.recipe.fields.chef) {
        return this.recipe.fields.chef.fields.name
      } else {
        return null
      }
    },
    tags () {
      if (this.recipe.fields.tags) {
        return this.recipe.fields.tags.map((t) => { return t.fields.name })
      } else {
        return []
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .title {
    font-size: x-large;
  }

  ul.tags {
    list-style: none;
    li {
      display: inline;
      color: #ffffff;
      background-color: #42b983;
      padding: 2px 5px 2px 5px;
      margin: 0 5px 0 0;
      border-radius: 5px;
    }
  }

  .thumb {
    img {
      width: 552px;
      height: 368px;
    }
  }

  .description {
    font-size: large;
    padding: 2px 15px 2px 10px;
    width: 75%;
    margin: 0 auto;
  }

  .chef {
    span {
      font-weight: bold;
    }
  }
</style>
