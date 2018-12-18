import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import songs from '../containers/SongListContainer/reducers';
import currentSong from '../containers/SongDetailsContainer/reducers';
import queue from '../containers/QueueContainer/reducers';
import trendingSong from '../sockets/reducers';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    songs,
    currentSong,
    queue,
    trendingSong,
});

export default rootReducer;
