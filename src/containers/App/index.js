// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import AppContainer from './AppContainer';
import { makeTrendingError, makeTrendingSong, makeTrendingIsLoading } from './selectors';


type Props = {
    classes: any
}

function App(props: Props) {
    return (
        <AppContainer {...props} />
    );
}

App.propTypes = {
    classes: PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
    trendingSong: makeTrendingSong(),
    error: makeTrendingError(),
    loading: makeTrendingIsLoading(),
});

export default connect(
    mapStateToProps
)(App);
