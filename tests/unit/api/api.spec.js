import client from '@/api/client.js';
import api from '@/api/api.js'
import { fakeRecipes } from '../../data/fakeData';

describe('api', () => {
  describe('recipes', () => {
    let recipes;

    beforeEach(async () => {
      client.getEntries = jest.fn(() => Promise.resolve(fakeRecipes))
      recipes = await api.recipes()
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls contentful', () => {
      expect(client.getEntries).toHaveBeenCalledTimes(1)
      expect(client.getEntries).toHaveBeenCalledWith({content_type: 'recipe'})
    })

    it('fetches recipes', () => {
      expect(recipes).toEqual(fakeRecipes.items)
    })
  });
});
