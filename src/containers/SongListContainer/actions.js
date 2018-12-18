import { GET_SONGS, GET_SONGS_SUCCESS, GET_SONGS_ERROR } from './constants';

export function getSongs() {
    return {
        type: GET_SONGS,
    };
}

export function songsLoaded(songs) {
    return {
        type: GET_SONGS_SUCCESS,
        songs,
    };
}

export function songLoadingError(error) {
    return {
        type: GET_SONGS_ERROR,
        error,
    };
}
