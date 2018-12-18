import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import { grey } from '@material-ui/core/colors';
import QueueContainer from '../../containers/QueueContainer/QueueContainer';

const styles = theme => ({
    avatar: {
        margin: 10,
        pointer: 'cursor',
    },
    grow: {
        flexGrow: 1,
        color: 'white',
    },
    button: {
        margin: 0,
        padding: 0,
    },
    hamburger: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    verticalNavigation: {
        flex: 1,
        minWidth: 300,
        paddingTop: 50,
        backgroundColor: grey[300],
    },
    menu: {
        color: 'white',
    },
});

type Props = {
    classes: any,
}

type State = {
    isDrawerVisible: boolean
}

class Header extends Component<Props, State> {
    state = {
        isDrawerVisible: false,
    };

    showDrawer() {
        this.setState({
            isDrawerVisible: true,
        });
    }

    hideDrawer() {
        this.setState({
            isDrawerVisible: false,
        });
    }

    render() {
        const { classes } = this.props;
        const { isDrawerVisible } = this.state;
        return (
            <AppBar
                position="fixed"
                color="primary"
            >
                <Toolbar>
                    <IconButton
                        color="contrast"
                        className={classes.hamburger}
                        onClick={() => this.showDrawer()}
                        aria-label="Menu"
                    >
                        <Menu className={classes.menu} />
                    </IconButton>
                    <Button
                        component={Link}
                        className={classes.button}
                        to="/"
                    >
                        <Avatar
                            alt="Blue Macaw Music App"
                            src="/images/logo.jpeg"
                            className={classes.avatar}
                        />
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.grow}
                        >
                            Blue Macaw Music App
                        </Typography>
                    </Button>
                </Toolbar>
                <Drawer
                    anchor="left"
                    open={isDrawerVisible}
                    onClose={() => this.hideDrawer()}
                >
                    <Grid
                        className={classes.verticalNavigation}
                        container
                        alignItems="center"
                        justify="flex-start"
                        spacing={0}
                        direction="column"
                    >
                        <QueueContainer />
                    </Grid>
                </Drawer>
            </AppBar>
        );
    }
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
