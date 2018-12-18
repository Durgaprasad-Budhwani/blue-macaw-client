// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { grey } from '@material-ui/core/colors';
import Hidden from '@material-ui/core/Hidden';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import type { Song } from '../../types';
import NotFound from '../NotFound';
import QueueContainer from '../QueueContainer/QueueContainer';
import SongTrackContainer from '../SongDetailsContainer/Track/SongTrackContainer';
import SongListContainer from '../SongListContainer';
import SongDetailsContainer from '../SongDetailsContainer/Details';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

type Props = {
    classes: any,
    trendingSong: Song,
}

type State = {
    song: Song
}

const styles = theme => ({
    queue: {
        backgroundColor: grey[300],
        height: '100%',
        overflowY: 'auto',
        marginBottom: 70,
    },
    container: {
        background: grey[100],
        height: '100%',
    },
    container1: {
        background: grey[100],
        flexGrow: 1,
        paddingTop: 70,
    },
    content: {
        flexGrow: 1,
        marginBottom: 70,
    },
    close: {
        padding: theme.spacing.unit / 2,
    },
});

class App extends Component<Props, State> {
    state = {
        open: false,
        // eslint-disable-next-line
        song: this.props.trendingSong,
    };

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        if (nextProps.trendingSong._id !== prevState.song._id) {
            return { open: true, song: nextProps.trendingSong };
        }
        return null;
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { song, open } = this.state;
        return (
            <Grid
                container
                className={classes.container}
            >
                <Header />
                <Grid
                    container
                    direction="row"
                    spacing={0}
                    className={classes.container1}
                    wrap="nowrap"
                    xs={12}
                >
                    <Hidden smDown>
                        <Grid
                            item
                            sm={false}
                            md={1}
                            lg={2}
                            className={classes.queue}
                        >
                            <QueueContainer />
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        xs={12}
                        md={11}
                        lg={11}
                        className={classes.content}
                    >
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={SongListContainer}
                            />
                            <Route
                                path="/song/:id"
                                component={SongDetailsContainer}
                            />
                            <Route
                                path="*"
                                component={NotFound}
                            />
                        </Switch>
                    </Grid>
                </Grid>
                <Footer component={<SongTrackContainer />} />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{`New Trending Song - ${song.name}`}</span>}
                    action={[
                        <Button
                            key="open"
                            color="secondary"
                            size="small"
                            component={Link}
                            to={`song/${song._id}`}
                        >
                            Open
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <Close />
                        </IconButton>,
                    ]}
                />
            </Grid>
        );
    }
}

App.propTypes = {
    classes: PropTypes.any.isRequired,
    trendingSong: PropTypes.any.isRequired,
};

export default withStyles(styles)(App);
