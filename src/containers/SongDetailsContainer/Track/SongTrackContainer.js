import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MusicPlayer from '../../../components/MusicPlayer';
import { playingSong, playingSongProgress, pauseSong } from '../actions';
import {
    makeSelectIsLoading,
    makeSelectSong,
    makeSelectSongError,
} from '../selectors';
import type { Song } from '../../../types';

type Props = {
    playingSong: Function,
    playingSongProgress: Function,
    pauseSong: Function,
    currentSong: Song,
}

class SongTrackContainer extends PureComponent <Props, void> {
    render() {
        return (
            <MusicPlayer
                {...this.props}
            />
        );
    }
}

SongTrackContainer.propTypes = {
    playingSong: PropTypes.func.isRequired,
    playingSongProgress: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    playingSong: () => {
        dispatch(playingSong());
    },
    playingSongProgress: (progress: number, isPlaying: boolean) => {
        dispatch(playingSongProgress(progress, isPlaying));
    },
    pauseSong: (song: Song) => {
        dispatch(pauseSong(song));
    },
});

const mapStateToProps = createStructuredSelector({
    currentSong: makeSelectSong(),
    loading: makeSelectIsLoading(),
    error: makeSelectSongError(),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongTrackContainer);
