import type { Song } from '../types';
import {
    SONG_RECOMMENDED,
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

const trendingSong = (state: Song = initialSong, action: any): Song => {
    switch (action.type) {
        case SONG_RECOMMENDED:
            return { ...action.song, error: null, loading: true };
        default:
            return state;
    }
};

export default trendingSong;
