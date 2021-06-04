import configureStore from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { loadCategories, loadRegions, loadRestaurants } from './asyncActions';
import { setCategories, setRegions, setSelectedRestaurants } from './RestaurantSlice';

jest.mock('../servies/api');

describe('asyncActions', () => {
  const mockStore = configureStore(getDefaultMiddleware());

  describe('loadCategories', () => {
    it('fetches categories when being dispatched', async () => {
      const store = mockStore({});
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories([
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
        { id: 3, name: '일식' },
        { id: 4, name: '양식' },
        { id: 5, name: '분식' },
      ]));
    });
  });

  describe('loadRegions', () => {
    it('fetches regions when being dispatched', async () => {
      const store = mockStore({});
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([
        '서울', '대전', '대구', '부산', '광주', '강원도',
      ]));
    });
  });

  describe('loadRestaurants', () => {
    it('fetches restuarants when being dispatched', async () => {
      const store = mockStore({});
      await store.dispatch(loadRestaurants('서울', 1));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setSelectedRestaurants([
        '양천주가',
        '한국식 초밥',
        '김초밥',
      ]));
    });
  });
});
