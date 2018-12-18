import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectQueue = state => get(state, 'queue');

export const makeQueueIsLoading = () => createSelector([selectQueue], state => get(state, 'loading', false));

export const makeQueueSongsList = () => createSelector([selectQueue], state => get(state, 'songs', []),
);

export const makeQueueError = () => createSelector([selectQueue], state => get(state, 'error', null),
);
