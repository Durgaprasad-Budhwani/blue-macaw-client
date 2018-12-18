import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Queue from '../../components/Queue';
import {
    makeQueueError,
    makeQueueSongsList,
    makeQueueIsLoading,
} from './selectors';

import { makeSelectSong } from '../SongDetailsContainer/selectors';
import type { Song } from '../../types';
import { pauseSong, playSong, playingSong } from '../SongDetailsContainer/actions';

type Props = {
    pauseSong: Function,
    playSong: Function,
    playingSong: Function,
    songs: Array<Song>,
    currentSong: Song,
}

function QueueContainer(props: Props) {
    return (
        <Queue
            {...props}
        />
    );
}

QueueContainer.propTypes = {
    playingSong: PropTypes.func.isRequired,
    playSong: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
    songs: PropTypes.any.isRequired,
    currentSong: PropTypes.any.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    playSong: (song: Song) => {
        dispatch(playSong(song));
    },
    pauseSong: () => {
        dispatch(pauseSong());
    },
    playingSong: () => {
        dispatch(playingSong());
    },
});

const mapStateToProps = createStructuredSelector({
    songs: makeQueueSongsList(),
    currentSong: makeSelectSong(),
    loading: makeQueueIsLoading(),
    error: makeQueueError(),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QueueContainer);
