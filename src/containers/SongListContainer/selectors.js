import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectSongsList = state => get(state, 'songs');

export const makeSelectIsLoading = () => createSelector([selectSongsList], state => get(state, 'loading', false));

export const makeSelectSongsList = () => createSelector([selectSongsList], state => get(state, 'songs', []),
);

export const makeSelectSongsListError = () => createSelector([selectSongsList], state => get(state, 'error', null),
);
