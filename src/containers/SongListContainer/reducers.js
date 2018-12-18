// @flow
import type { SongsInfo } from '../../types';
import { GET_SONGS, GET_SONGS_SUCCESS, GET_SONGS_ERROR } from './constants';

const initialSongsInfo : SongsInfo = {
    songs: [],
    loading: 0,
    error: null,
};

const songs = (state : SongsInfo = initialSongsInfo, action : any) : SongsInfo => {
    switch (action.type) {
        case GET_SONGS:
            return { ...state, loading: true, error: null };
        case GET_SONGS_SUCCESS:
            return { ...state, songs: action.songs, loading: false, error: null };
        case GET_SONGS_ERROR: {
            return { ...state, loading: false, error: action.error };
        }
        default:
            return state;
    }
};

export default songs;
