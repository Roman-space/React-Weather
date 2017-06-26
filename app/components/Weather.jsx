var React = require('react');
var Weather_result = require('Weather_result');
var Weather_form = require('Weather_form');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        this.setState({isLoading: true});
        OpenWeatherMap.getTemp(location).then( (temp) => { 
            this.setState({isLoading: false});
            this.setState({ location: location, temp: temp })
        }, (err) => { this.setState({isLoading: false}); alert(err); }); 
    },
    render: function() {
        var { isLoading, temp, location } = this.state;
        var ctx = this;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fething message...</h3>;
            } else if (temp && location) {
                return <Weather_result location={location} temp={temp}  />;
            }
        }
        return (
            <div>
                <Weather_form onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
