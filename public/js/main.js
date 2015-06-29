import React from 'react'
import something from './lib.js';

const App = React.createClass({
  render() {
    console.log('render')
    return <div>This is it</div>;
  }
});

React.render(<App />, document.getElementById('app'));