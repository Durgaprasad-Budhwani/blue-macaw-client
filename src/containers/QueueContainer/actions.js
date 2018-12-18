import { ADD_TO_QUEUE } from './constants';
import type { Song } from '../../types';

export function addToQueue(song:Song) {
    return {
        type: ADD_TO_QUEUE,
        song,
    };
}
