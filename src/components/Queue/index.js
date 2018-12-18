import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { grey } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/es/Typography/Typography';
import QueueItem from './QueueItem';
import type { Song } from '../../types';

type Props = {
    classes: any,
    playSong: Function,
    pauseSong: Function,
    playingSong: Function,
    songs: Array<Song>,
    currentSong: Song,
}

const styles = () => ({
    center: {
        color: grey[700],
    },
});

function Queue(props: Props) {
    const { classes, songs, currentSong, pauseSong, playSong, playingSong } = props;
    return (
        <Grid
            container
            direction="column"
            alignItems="stretch"
            justify="flex-start"
        >
            <Typography
                align="center"
                variant="h6"
                className={classes.center}
            >
Queue
            </Typography>
            <List className={classes.container}>
                {songs && songs.map(song => (
                    <QueueItem
                        key={song._id}
                        currentSong={currentSong}
                        pauseSong={pauseSong}
                        playingSong={playingSong}
                        playSong={playSong}
                        song={song}
                    />
                ))}
                <Divider />
            </List>
        </Grid>
    );
}

Queue.propTypes = {
    classes: PropTypes.any.isRequired,
    currentSong: PropTypes.any.isRequired,
    songs: PropTypes.any,
    playSong: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
    playingSong: PropTypes.func.isRequired,
};

export default withStyles(styles)(Queue);
