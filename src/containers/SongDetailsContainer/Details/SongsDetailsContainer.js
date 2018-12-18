import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SongDetails from '../../../components/SongDetails';
import { getSong } from '../actions';
import {
    makeSelectIsLoading,
    makeSelectSong,
    makeSelectSongError,
} from '../selectors';
import type { Song } from '../../../types';

type Props = {
    getSong : Function,
    currentSong: Song,
    match: any
}

class SongDetailsContainer extends PureComponent <Props, void> {
    componentDidMount() {
        // eslint-disable-next-line no-shadow
        const { match: { params: { id } }, getSong } = this.props;
        if (id) {
            getSong(id);
        }
    }

    render() {
        const { currentSong } = this.props;
        return (
            <SongDetails currentSong={currentSong} />
        );
    }
}

SongDetailsContainer.propTypes = {
    getSong: PropTypes.func.isRequired,
    match: PropTypes.any.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
    getSong: (id) => {
        dispatch(getSong(id));
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
)(SongDetailsContainer);
