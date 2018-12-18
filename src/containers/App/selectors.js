import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectTrending = state => get(state, 'trendingSong');

export const makeTrendingIsLoading = () => createSelector([selectTrending], state => get(state, 'loading', false));

export const makeTrendingSong = () => createSelector([selectTrending], state => state);

export const makeTrendingError = () => createSelector([selectTrending], state => get(state, 'error', null),
);
