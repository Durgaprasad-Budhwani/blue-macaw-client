const formatSeconds = (seconds) => {
    const minutes = (seconds % 3600) / 60;

    const sec = seconds % 60;
    return [minutes, sec].map(format).join(':');
};

const format = (val) => (`0${Math.floor(val)}`).slice(-2);

export default formatSeconds;
