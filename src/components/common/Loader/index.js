import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const getWrapperClass = (isInline, isInlineCover) => {
    if (isInline) {
        return 'inline-loading-container-wrapper';
    } if (isInlineCover) {
        return 'loading-container-wrapper inline-cover';
    }
    return 'loading-container-wrapper';
};

const getLoaderClass = (isInline, isInlineCover) => {
    if (isInline) {
        return 'inline-loading-container';
    } if (isInlineCover) {
        return 'loading-container inline-cover';
    }
    return 'loading-container';
};

const LoadingWrapper = ({ children, isInline, isInlineCover }) => (
    <div className={getWrapperClass(isInline, isInlineCover)}>
        <div className={getLoaderClass(isInline, isInlineCover)}>{children}</div>
    </div>
);

LoadingWrapper.propTypes = {
    children: PropTypes.object,
    isInline: PropTypes.bool,
    isInlineCover: PropTypes.bool,
};

const Loading = props => {
    const { error, pastDelay, timedOut, isInline, isInlineCover } = props;
    if (error) {
        return (
            <LoadingWrapper isInline={isInline} isInlineCover={isInlineCover}>
                <p>Something went wrong!</p>
            </LoadingWrapper>
        );
    }
    if (pastDelay || timedOut) {
        return (
            <LoadingWrapper isInline={isInline} isInlineCover={isInlineCover}>
                <span>
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </span>
            </LoadingWrapper>
        );
    }
    return null;
};

Loading.propTypes = {
    error: PropTypes.bool,
    timedOut: PropTypes.bool,
    pastDelay: PropTypes.bool,
    isInline: PropTypes.bool,
    isInlineCover: PropTypes.bool,
};

export default Loading;
