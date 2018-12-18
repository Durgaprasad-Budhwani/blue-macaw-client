import { call, put, takeLatest } from 'redux-saga/effects';
import { songFetchError, songFetchSuccess, playSong } from './actions';
import { addToQueue } from '../QueueContainer/actions';
import {
    FETCH_SONG_DETAILS,
} from './constants';
import { GetSong } from '../../services';
import { newSongPlayed } from '../../sockets/actions';

function* GetSelectedSong(payload: any) {
    const { error, res } = yield call(GetSong, payload.id);
    if (res) {
        yield put(songFetchSuccess(res));
        yield put(playSong(res));
        yield put(addToQueue(res));
        yield put(newSongPlayed(res));
    } else {
        yield put(songFetchError(error));
    }
}

export function* watchMusicAsync() {
    yield takeLatest(FETCH_SONG_DETAILS, GetSelectedSong);
}
