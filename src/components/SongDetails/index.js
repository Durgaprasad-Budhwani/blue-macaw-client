import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { backgroundContrastLightGradient, primaryColorDark } from '../../theme/Colors';
import type { Song } from '../../types';

type Props = {
    classes: any,
    currentSong: Song
}

const styles = theme => ({
    container: {
        background: backgroundContrastLightGradient,
        width: '100%',
        height: '100%',
        marginTop: 0,
        [theme.breakpoints.up('md')]: {
            paddingTop: 50,
        },
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 150,
        },
    },
    paper: {
        [theme.breakpoints.up('md')]: {
            margin: 30,
        },
        padding: 0,
    },
    image: {
        [theme.breakpoints.up('md')]: {
            width: 300,
            height: 300,
        },

    },
    grow: {
        flexGrow: 1,
        backgroundColor: 'red',
    },
    upperContainer: {
        margin: 30,
    },
    heading: {
        color: primaryColorDark,
    },
    description: {
        color: theme.palette.text.secondary,
    },

});

function SongDetails(props: Props) {
    const { classes, currentSong } = props;
    return (
        <Grid className={classes.container}>
            <Paper className={classes.paper}>
                <Grid
                    direction="row"
                    container
                    justify="center"
                >
                    <Grid
                        lg={3}
                        md={3}
                        xs={6}
                        item
                    >
                        <img
                            src={currentSong.image}
                            alt={currentSong.name}
                            className={classes.image}
                        />
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={9}
                        xs={6}
                        container
                        className={classes.upperContainer}
                    >
                        <Grid
                            direction="column"
                            container
                            item
                            justify="space-between"
                        >
                            <Grid
                                direction="column"
                                container
                                item
                            >
                                <Typography
                                    noWrap={false}
                                    variant="h5"
                                    className={classes.heading}
                                >
                                    {currentSong.name}
                                </Typography>
                                <Typography
                                    noWrap={false}
                                    variant="body1"
                                    className={classes.description}
                                >
                                    {currentSong.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

SongDetails.propTypes = {
    classes: PropTypes.any.isRequired,
    currentSong: PropTypes.any.isRequired,
};

export default withStyles(styles)(SongDetails);
