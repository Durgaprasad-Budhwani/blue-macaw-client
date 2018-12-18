import type { Song } from '../../types';
import {
    PAUSE_SONG,
    PLAY_SONG,
    PLAYING_SONG_ERROR,
    PLAYING_SONG_PROGRESS,
    PLAYING_SONG_SUCCESS,
    FETCH_SONG_DETAILS,
    FETCH_SONG_DETAILS_ERROR,
    FETCH_SONG_DETAILS_SUCCESS,
} from './constants';

export function getSong(id: string) {
    return {
        type: FETCH_SONG_DETAILS,
        id,
    };
}

export function songFetchError(error) {
    return {
        type: FETCH_SONG_DETAILS_ERROR,
        error,
    };
}

export function songFetchSuccess(song: Song) {
    return {
        type: FETCH_SONG_DETAILS_SUCCESS,
        song,
    };
}

export function playSong(song: Song) {
    return {
        type: PLAY_SONG,
        song,
    };
}

export function pauseSong() {
    return {
        type: PAUSE_SONG,
    };
}

export function playingSong() {
    return {
        type: PLAYING_SONG_SUCCESS,
    };
}

export function playingSongProgress(progress: number, isPlaying: boolean) {
    return {
        type: PLAYING_SONG_PROGRESS,
        progress,
        isPlaying,
    };
}

export function playingSongError(error) {
    return {
        type: PLAYING_SONG_ERROR,
        error,
    };
}
