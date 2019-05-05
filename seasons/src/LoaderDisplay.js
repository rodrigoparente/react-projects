import React from 'react'

const LoaderDisplay = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    )
};

LoaderDisplay.defaultProps = {
    message: 'Loading...'
};

export default LoaderDisplay;