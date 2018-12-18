import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Details from './Details';
import TrackInformation from './TrackInformation';
import type { Song } from '../../types';

type Props = {
    classes: any,
    playingSong: Function,
    pauseSong: Function,
    currentSong: Song
}

const styles = () => ({
    container: {
        flex: 1,
    },
    details: {
        borderRight: '3px solid grey',
        margin: 10,
        flex: 1,
    },
    progress: {
        flex: 1,
    },
});

function MusicPlayer(props: Props) {
    const { classes, currentSong, playingSong, playingSongProgress, pauseSong } = props;
    return (
        <Grid
            container
            direction="row"
            alignItems="stretch"
            alignContent="stretch"
            className={classes.container}
        >
            <Grid
                md={3}
                lg={3}
                xs={false}
                item
                className={classes.details}
            >
                <Details currentSong={currentSong} />
            </Grid>
            <Grid
                md={9}
                lg={9}
                xs={12}
                item
                className={classes.progress}
            >
                <TrackInformation
                    currentSong={currentSong}
                    playingSong={playingSong}
                    playingSongProgress={playingSongProgress}
                    pauseSong={pauseSong}
                />
            </Grid>
        </Grid>
    );
}

MusicPlayer.propTypes = {
    classes: PropTypes.any.isRequired,
    playingSong: PropTypes.func.isRequired,
    playingSongProgress: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
    currentSong: PropTypes.any.isRequired,
};

export default withStyles(styles)(MusicPlayer);
