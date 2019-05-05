import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'massive sun icon'
    },
    winter: {
        text: 'Burr, it\'s cold',
        iconName: 'massive snowflake icon'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(
        props.lat,
        new Date().getMonth()
    );

    return (
        <div className={`season-display ${season}`}>
            <i className={`${seasonConfig[season].iconName} icon-left`}></i>
            <h1>{seasonConfig[season].text}</h1>
            <i className={`${seasonConfig[season].iconName} icon-right`}></i>
        </div>
    );
};

export default SeasonDisplay;