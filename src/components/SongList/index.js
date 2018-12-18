import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/es/Typography/Typography';
import Divider from '@material-ui/core/Divider';
import SongItem from './SongItem';
import { primaryColorDark } from '../../theme/Colors';
import type { Song } from '../../types';

type Props = {
    classes: any,
    songs: Array<Song>,
    currentSong: Song

}

const styles = () => ({
    container: {
        flex: 1,
    },
    header: {
        color: primaryColorDark,
        marginLeft: 20,
        marginTop: 20,
    },
});

function SongList(props: Props) {
    const { classes, songs, currentSong } = props;
    return (
        <Grid
            className={classes.container}
            container
            spacing={4}
            direction="column"
        >
            <Typography
                variant="h6"
                className={classes.header}
            >
New Release
            </Typography>
            <Grid
                container
                direction="row"
                spacing={4}
            >
                {songs && songs.map(song => (
                    <SongItem
                        song={song}
                        currentSong={currentSong}
                        key={song._id}
                    />
                ))}
            </Grid>
            <Divider />
        </Grid>
    );
}

SongList.propTypes = {
    classes: PropTypes.any.isRequired,
    songs: PropTypes.any.isRequired,
    currentSong: PropTypes.any.isRequired,

};

export default withStyles(styles)(SongList);
