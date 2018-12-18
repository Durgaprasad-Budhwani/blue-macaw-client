import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    avatar: {
        margin: 10,
        pointer: 'cursor',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
});

type Props = {
    classes: any,
    component: any,
}

function Footer(props: Props) {
    const { classes, component } = props;
    return (
        <AppBar
            position="fixed"
            color="primary"
            className={classes.appBar}
        >
            {component}
        </AppBar>
    );
}


Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    component: PropTypes.any.isRequired,
};

export default withStyles(styles)(Footer);
