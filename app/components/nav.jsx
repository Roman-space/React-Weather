var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = props => {
    return (
        <header>
            <nav>
        <IndexLink activeClass="active" activeStyle={{color:'red'}} to="/"> Get Weather </IndexLink>
                <Link activeClass="active"  activeStyle={ {color: 'red'} } to="/about">About</Link>
                <Link activeClass="active" activeStyle={ {color: 'red'} } to="/examples">Examples</Link>
            </nav>
            <h1>Nav</h1>
        </header>
    );
}

module.exports = Nav;
