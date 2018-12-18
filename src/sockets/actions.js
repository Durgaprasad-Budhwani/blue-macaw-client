import type { Song } from '../types';
import { SONG_RECOMMENDED, NEW_SONGS_PLAYED } from './constants';


export function songRecommended(song: Song) {
    return {
        type: SONG_RECOMMENDED,
        data: song,
    };
}

export function newSongPlayed(song: Song) {
    return {
        type: NEW_SONGS_PLAYED,
        data: song,
    };
}
