<template lang='html'>
  <div class='recipe'>
    <p class='title'>{{ title }}</p>
    <div class='thumb'>
      <img :src='image'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipe',
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
    }
  }
}
</script>

<style lang='scss' scoped>
  .recipe {
    padding: 0 0 40px 0;

    p.title {
      font-size: x-large;
    }

    .thumb {
      img {
        width: 552px;
        height: 368px;
      }
    }
  }
</style>
