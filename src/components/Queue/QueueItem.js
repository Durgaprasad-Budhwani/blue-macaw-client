import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import classnames from 'classnames';
import { grey } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import type { Song } from '../../types';
import { primaryColorDark } from '../../theme/Colors';

type Props = {
    classes: any,
    currentSong: Song,
    song: Song,
    pauseSong: Function,
    playingSong: Function,
    playSong: Function
}

const styles = () => ({
    container: {
        cursor: 'pointer',
        margin: 0,
        padding: 0,
    },
    leftBorder: {
        borderLeft: `5px solid${primaryColorDark}`,
    },
    button: {
        margin: 0,
        width: '100%',
    },
    imageIcon: {
        width: 64,
        height: 64,
    },
    listItem: {
        margin: 0,
        padding: 0,
    },
    icon: {
        fontSize: 64,
    },
    name: {
        color: grey[700],
        fontSize: 14,
    },

});

function QueueItem(props: Props) {
    const { classes, song, currentSong, pauseSong, playSong, playingSong } = props;
    const isSame = song._id === currentSong._id;


    const changeSong = () => {
        if (isSame) {
            if (currentSong.isPlaying) {
                pauseSong();
            } else {
                playingSong();
            }
        } else {
            playSong(song);
        }
    };


    return (
        <Grid
            container
            direction="column"
            spacing={0}
            className={classnames({
                [classes.container]: true,
                [classes.leftBorder]: isSame,
            })}
        >
            <Divider />
            <ButtonBase
                className={classes.button}
                onClick={changeSong}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={0}
                    className={classes.listItem}
                >
                    <Hidden mdDown>
                        <Grid
                            item
                            xs={4}
                            md={6}
                            sm={false}
                        >
                            <img
                                className={classes.imageIcon}
                                src={song.image}
                                alt={song.name}
                            />
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        md={6}
                        sm={false}
                    >
                        <Typography
                            noWrap
                            className={classes.name}
                        >
                            {song.name}
                        </Typography>
                    </Grid>

                </Grid>
            </ButtonBase>
        </Grid>
    );
}

QueueItem.propTypes = {
    classes: PropTypes.any.isRequired,
    currentSong: PropTypes.any.isRequired,
    song: PropTypes.any.isRequired,
    playSong: PropTypes.func.isRequired,
    playingSong: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
};

export default withStyles(styles)(QueueItem);
