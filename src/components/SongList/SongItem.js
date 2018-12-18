import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { primaryColorDark } from '../../theme/Colors';
import type { Song } from '../../types';

type Props = {
    classes: any,
    song: Song,
    currentSong: Song
}

const styles = () => ({
    container: {
        padding: 10,
    },
    button: {
        minWidth: 200,
        padding: 0,

        '&:hover': {
            '& .overlay': {
                display: 'flex',
            },
        },
    },
    bottomBorder: {
        borderBottom: `5px solid${primaryColorDark}`,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'none',
        color: 'white',
        backgroundColor: 'rgba(0,0,0, 0.3)',
    },
    play: {
        fontSize: 200,
    },
    cover: {
        width: 200,
    },
    card: {
        margin: 0,
        width: '100%',
        height: '100%',
    },
});

function SongItem(props: Props) {
    const { classes, song, currentSong } = props;
    const playing = song._id === currentSong._id;
    return (
        <Grid
            item
            className={classes.container}
            xs={12}
            md={6}
            lg={3}
        >
            <Button
                className={classes.button}
                fullWidth
                component={Link}
                to={`song/${song._id}`}
            >
                <Card
                    className={classnames({
                        [classes.card]: true,
                        [classes.bottomBorder]: playing,
                    })}
                >
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        alignContent="center"
                        justify="center"
                    >
                        <img
                            className={classes.cover}
                            src={song.image}
                            alt={song.name}
                        />
                        <Typography
                            noWrap={false}
                            variant="body1"
                        >
                            {song.name}
                        </Typography>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justify="center"
                            className={classnames({
                                overlay: true,
                                [classes.overlay]: true,
                            })}
                        >
                            <PlayArrow className={classes.play} />
                        </Grid>
                    </Grid>
                </Card>
            </Button>
        </Grid>
    );
}

SongItem.propTypes = {
    classes: PropTypes.any.isRequired,
    song: PropTypes.any,
    currentSong: PropTypes.any.isRequired,
};

export default withStyles(styles)(SongItem);
