// @flow
import type { SongsInfo } from '../../types';
import { ADD_TO_QUEUE } from './constants';

const initialQueue: SongsInfo = {
    songs: [],
    loading: 0,
    error: null,
};

const queue = (state: SongsInfo = initialQueue, action: any): SongsInfo => {
    switch (action.type) {
        case ADD_TO_QUEUE: {
            const newState = { ...state };
            if (newState.songs && newState.songs.length) {
                const index = newState.songs.findIndex(item => item._id === action.song._id);
                if (index > -1) {
                    newState.songs = [action.song, ...newState.songs.slice(0, index),
                        ...newState.songs.slice(index + 1, newState.songs.length)];
                } else {
                    newState.songs = [action.song, ...newState.songs];
                }
                return newState;
            }
            return { songs: [action.song] };
        }
        default:
            return state;
    }
};

export default queue;
