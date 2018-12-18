import get from 'lodash/get';
import { createSelector } from 'reselect';
import { initialSong } from './reducers';


export const selectCurrentSong = state => get(state, 'currentSong', initialSong);

export const makeSelectIsLoading = () => createSelector([selectCurrentSong], state => get(state, 'loading', false));

export const makeSelectSong = () => createSelector([selectCurrentSong], state => state);

export const makeSelectSongError = () => createSelector([selectCurrentSong], state => get(state, 'error', null),
);
