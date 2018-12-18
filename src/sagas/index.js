// @flow

import { all, fork } from 'redux-saga/effects';
import { watchMusicListAsync } from '../containers/SongListContainer/sagas';
import { watchMusicAsync } from '../containers/SongDetailsContainer/sagas';

export default function* rootSaga() {
    yield all([
        fork(watchMusicListAsync),
        fork(watchMusicAsync),
    ]);
}
