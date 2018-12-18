/* eslint-disable */
// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import FastForward from '@material-ui/icons/FastForward';
import FastRewind from '@material-ui/icons/FastRewind';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/es/Button/Button';
import Typography from '@material-ui/core/es/Typography/Typography';
import debounce from 'lodash/debounce';
import formatSeconds from '../../utils/formatSeconds';
import type { Song } from '../../types';

type Props = {
    classes: any,
    playingSong: Function,
    playingSongProgress: Function,
    pauseSong: Function,
    currentSong: Song,
}

const styles = () => ({
    container: {
        flex: 1,
    },
    play: {
        fontSize: 64,
        color: 'white',
    },
    icon: {
        fontSize: 30,
        color: 'white',
    },
    timing: {
        color: 'white',
        fontSize: 24,
        marginRight: 10,
    },
    grow: {
        flexGrow: 1,
    },
});

type State = {}

class TrackInformation extends React.PureComponent<Props, State> {
    state = {
        progress: 0,
        // eslint-disable-next-line
        play: this.props.autoplay || false,
        duration: '00:00',
        currentTime: '00:00',
    };

    debounced = debounce((fn, data, event) => {
        fn(data, event);
    }, 100);

    static propTypes = {
        autoplay: PropTypes.bool,
    };

    static defaultProps = {
        autoplay: true,
    };

    componentDidMount() {
        const { audioContainer } = this;
        audioContainer.addEventListener('timeupdate', this.updateProgress.bind(this));
        audioContainer.addEventListener('ended', this.end.bind(this));
        audioContainer.addEventListener('pause', this.onChange.bind(this));
        audioContainer.addEventListener('play', this.onChange.bind(this));
        audioContainer.addEventListener('error', this.onChange.bind(this));
        audioContainer.addEventListener('canplay', this.onChange.bind(this));
    }

    componentWillUnmount() {
        const { audioContainer } = this;
        audioContainer.removeEventListener('timeupdate', this.updateProgress.bind(this));
        audioContainer.removeEventListener('ended', this.end.bind(this));
        audioContainer.removeEventListener('pause', this.onChange.bind(this));
        audioContainer.removeEventListener('play', this.onChange.bind(this));
        audioContainer.removeEventListener('error', this.onChange.bind(this));
        audioContainer.removeEventListener('canplay', this.onChange.bind(this));
    }

    onChange() {
        const { duration, currentTime } = this.audioContainer;
        const { playingSongProgress } = this.props;
        const progress = currentTime / duration * 100;
        playingSongProgress(progress, this.isPlaying());
    }

    updateProgress() {
        const { duration, currentTime } = this.audioContainer;
        const { playingSongProgress } = this.props;
        const progress = currentTime / duration * 100;
        playingSongProgress(progress, this.isPlaying());
        this.setState({
            progress,
            duration: formatSeconds(duration),
            currentTime: formatSeconds(currentTime),
            play: true,
        });
    }


    end() {
        // FIXME -- need to check this.handleNext()
    }

    handleAdjustProgress(event, value) {
        const { playingSongProgress } = this.props;
        this.debounced.cancel();
        this.debounced(() => {
            this.audioContainer.pause();
            const progress = value / 100;
            const currentTime = this.audioContainer.duration * progress;
            this.audioContainer.currentTime = currentTime;
            this.setState({
                play: true,
                progress,
            }, () => {
                playingSongProgress(progress, this.isPlaying());
                this.audioContainer.play();
            });
        }, 100);
    }

    isPlaying() {
        return this.audioContainer
            && this.audioContainer.currentTime > 0
            && !this.audioContainer.paused
            && !this.audioContainer.ended
            && this.audioContainer.readyState > 2;
    }

    handleToggle() {
        const { playingSong, pauseSong } = this.props;
        if (!this.isPlaying()) {
            playingSong();
            this.audioContainer.play();
        } else {
            pauseSong();
            this.audioContainer.pause();
        }
        this.setState({ play: !this.isPlaying() });
    }

    render() {
        const { classes, currentSong } = this.props;
        const { progress, duration, currentTime, play } = this.state;
        const isPlaying = this.isPlaying();
        return (
            <Grid
                container
                direction="column"
                justify="space-between"
            >
                <audio
                    autoPlay={play}
                    preload="auto"
                    ref={ref => {
                        this.audioContainer = ref;
                    }}
                    src={currentSong.url}
                />
                <Grid>
                    <Slider
                        variant="determinate"
                        value={progress}
                        onChange={(e, v) => this.handleAdjustProgress(e, v)}
                        aria-labelledby="label"
                    />
                </Grid>
                <Grid
                    container
                    justify="space-around"
                    direction="row"
                    alignItems="center"
                >
                    <Grid
                        item
                        className={classes.grow}
                    >
                        {/*<Button>*/}
                            {/*<FastRewind className={classes.icon} />*/}
                        {/*</Button>*/}
                        <Button onClick={() => this.handleToggle()}>
                            {!isPlaying && <PlayArrow className={classes.play} />}
                            {isPlaying && <Pause className={classes.play} />}
                        </Button>
                        {/*<Button>*/}
                            {/*<FastForward className={classes.icon} />*/}
                        {/*</Button>*/}
                    </Grid>
                    <Typography className={classes.timing}>
                        {currentTime}
/
                        {duration}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

TrackInformation.propTypes = {
    classes: PropTypes.any.isRequired,
    playingSong: PropTypes.func.isRequired,
    playingSongProgress: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
    currentSong: PropTypes.any.isRequired,
};

export default withStyles(styles)(TrackInformation);
