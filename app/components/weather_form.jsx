var React = require('react');

var Weather_form = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;
        console.log(location);
        if ( location.length > 0 ) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" name="city" />
                <button>Get Weather</button>
            </form>
        );
    }
});

module.exports = Weather_form;
