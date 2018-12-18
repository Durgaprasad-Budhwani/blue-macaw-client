import { call, put, takeLatest } from 'redux-saga/effects';
import { songsLoaded, songLoadingError } from './actions';
import { GetSongs } from '../../services';

import {
    GET_SONGS,
} from './constants';

function* GetLatestSongs() : void {
    const { error, res } = yield call(GetSongs, 0, 20); // TODO -- need to fix pagination
    if (res) {
        yield put(songsLoaded(res));
    } else {
        yield put(songLoadingError(error));
    }
}

export function* watchMusicListAsync() {
    yield takeLatest(GET_SONGS, GetLatestSongs);
}
