<template lang='html'>
  <div class='recipe' v-if='recipe'>
    <RecipeDetail :recipe='recipe'/>
  </div>
</template>

<script>
import api from '@/api/api.js'
import RecipeDetail from '@/components/RecipeDetail.vue'

export default {
  name: 'recipe',
  components: {
    RecipeDetail
  },
  data () {
    return {
      recipe: null
    }
  },
  methods: {
    async fetchRecipe () {
      api.recipe(this.$route.params.id)
        .then((response) => { this.recipe = response[0] })
        .catch((error) => { console.error(error) })
    }
  },
  beforeMount () {
    this.fetchRecipe()
  },
  watch: {
    '$route': 'fetchRecipe'
  }
}
</script>

<style lang='scss' scoped>
  .recipes {
    ul {
      list-style: none;
    }
  }
</style>
