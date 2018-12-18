// @flow
import type { Song } from '../../types';
import {
    FETCH_SONG_DETAILS,
    FETCH_SONG_DETAILS_ERROR,
    FETCH_SONG_DETAILS_SUCCESS,
    PLAY_SONG, PLAYING_SONG_ERROR, PAUSE_SONG, PLAYING_SONG_PROGRESS, PLAYING_SONG_SUCCESS,
} from './constants';

export const initialSong: Song = {
    _id: null,
    name: null,
    duration: 0,
    description: null,
    license: null,
    size: null,
    path: null,
    composer: [],
    tags: [],
    category: null,
    error: null,
    isPlaying: false,
    progress: 0,
    loading: false,
};

const currentSong = (state: Song = initialSong, action: any): Song => {
    switch (action.type) {
        case FETCH_SONG_DETAILS:
            return { ...action.song, error: null, loading: true };
        case FETCH_SONG_DETAILS_ERROR:
            return { ...state, error: action.error, loading: false };
        case FETCH_SONG_DETAILS_SUCCESS:
            return { ...action.song, error: null, loading: false };
        case PLAY_SONG:
            return { ...action.song, error: null };
        case PLAYING_SONG_ERROR:
            return { ...state, error: action.error };
        case PLAYING_SONG_SUCCESS:
            return { ...state, error: null, isPlaying: true };
        case PLAYING_SONG_PROGRESS:
            return { ...state, error: null, progress: action.progress, isPlaying: !!action.isPlaying };
        case PAUSE_SONG:
            return { ...state, error: null, isPlaying: false };
        default:
            return state;
    }
};

export default currentSong;
