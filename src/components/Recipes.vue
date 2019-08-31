<template lang='html'>
  <div class='recipes'>
    <h1>Recipes</h1>
    <ul>
      <li v-for='recipe in recipes' :key='recipe.sys.id'>
        <Recipe :recipe='recipe'/>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/api.js'
import Recipe from '@/components/Recipe.vue'

export default {
  name: 'recipes',
  components: {
    Recipe
  },
  data () {
    return {
      recipes: null
    }
  },
  methods: {
    async fetchRecipes () {
      api.recipes()
        .then(
          (response) => { this.recipes = response }
        ).catch(
          (error) => { console.error(error) }
        )
    }
  },
  mounted () {
    this.fetchRecipes()
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
