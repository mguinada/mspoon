import client from '@/api/client.js';
import api from '@/api/api.js'
import { fakeRecipes } from '../../data/fakeData';

describe('api', () => {
  describe('recipes', () => {
    beforeEach(() => {
      client.getEntries = jest.fn(() => Promise.resolve(fakeRecipes));
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('fetches recipes', async () => {
      expect(await api.recipes()).toEqual(fakeRecipes.items);
      expect(client.getEntries).toHaveBeenCalledTimes(1);
      expect(client.getEntries).toHaveBeenCalledWith({content_type: 'recipe'});
    })
  });
});
