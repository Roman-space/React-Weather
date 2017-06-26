var React = require('react');

var Weather_result = props => {
    return (
        <header>
            <h3>Current weather at {props.location}</h3>
            <p>Temperature: {props.temp}</p>
        </header>
    );
}

module.exports = Weather_result;
