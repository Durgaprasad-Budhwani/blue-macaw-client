import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SongList from '../../components/SongList';
import { getSongs } from './actions';
import {
    makeSelectIsLoading,
    makeSelectSongsList,
    makeSelectSongsListError,
} from './selectors';
import { makeSelectSong } from '../SongDetailsContainer/selectors';
import type { Song } from '../../types';

type Props = {
    getSongs: Function,
    songs: Array<Song>,
    currentSong: Song,
}

class SongListContainer extends Component <Props, void> {
    componentDidMount() {
        // eslint-disable-next-line
        const { getSongs } = this.props;
        getSongs();
    }

    render() {
        return (
            <SongList
                {...this.props}
            />
        );
    }
}

SongListContainer.propTypes = {
    getSongs: PropTypes.func.isRequired,
    songs: PropTypes.any.isRequired,
    currentSong: PropTypes.any.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    getSongs: () => {
        dispatch(getSongs());
    },
});

const mapStateToProps = createStructuredSelector({
    songs: makeSelectSongsList(),
    loading: makeSelectIsLoading(),
    error: makeSelectSongsListError(),
    currentSong: makeSelectSong(),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SongListContainer);
