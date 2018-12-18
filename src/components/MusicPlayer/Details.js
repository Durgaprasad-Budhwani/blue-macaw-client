import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { primaryColorDark } from '../../theme/Colors';
import type { Song } from '../../types';

type Props = {
    classes: any,
    currentSong: Song
}

const styles = () => ({
    container: {
        flex: 1,
    },
    songName: {
        color: primaryColorDark,
        margin: 10,
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
    heading: {
        color: primaryColorDark,
        fontSize: 14,
        overflow: 'hidden',
        wordSpace: 'nowrap',
        marginBottom: 10,
    },
    description: {
        color: 'white',
        fontSize: 14,
        overflow: 'hidden',
        wordSpace: 'nowrap',
        maxWidth: 300,
    },
});

function Details(props: Props) {
    const { classes, currentSong } = props;
    return (
        <Grid container direction="row" alignItems="center" className={classes.listItem}>
            <Grid item xs={3}>
                <img alt={currentSong.name} className={classes.imageIcon} src={currentSong.image} />
            </Grid>
            <Grid item xs={9} container direction="column">
                <Typography noWrap variant="inherit" className={classes.heading}>{currentSong.name}</Typography>
                <Typography noWrap variant="inherit" className={classes.description}>{currentSong.description}</Typography>
            </Grid>
        </Grid>
    );
}

Details.propTypes = {
    classes: PropTypes.any.isRequired,
    currentSong: PropTypes.any.isRequired,
};

export default withStyles(styles)(Details);
