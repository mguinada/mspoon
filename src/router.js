import Vue from 'vue'
import Router from 'vue-router'
import Recipes from './views/Recipes.vue'
import Recipe from './views/Recipe.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/PageNotFound.vue')
    }
  ]
})
