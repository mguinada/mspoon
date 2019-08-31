import client from '@/api/client.js'
import api from '@/api/api.js'
import { fakeRecipes, fakeRecipe } from '../../data/fakeData.js'

describe('api', () => {
  describe('recipes', () => {
    let recipes

    beforeEach(async () => {
      client.getEntries = jest.fn(() => Promise.resolve(fakeRecipes))
      recipes = await api.recipes()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('calls contentful', () => {
      expect(client.getEntries).toHaveBeenCalledTimes(1)
      expect(client.getEntries).toHaveBeenCalledWith({'content_type': 'recipe'})
    })

    it('fetches recipes', () => {
      expect(recipes).toEqual(fakeRecipes.items)
    })
  })

  describe('recipe', () => {
    let recipe

    beforeEach(async () => {
      client.getEntries = jest.fn(() => Promise.resolve(fakeRecipe))
      recipe = await api.recipe('437eO3ORCME46i02SeCW46')
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('calls contentful', () => {
      expect(client.getEntries).toHaveBeenCalledTimes(1)
      expect(client.getEntries).toHaveBeenCalledWith({'content_type': 'recipe', 'sys.id': '437eO3ORCME46i02SeCW46' })
    })

    it('fetches recipe', () => {
      expect(recipe).toEqual(fakeRecipe.items)
    })
  })
})
