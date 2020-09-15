// Expects the count, headers, results to be sent in as props
// Renders the count
// Renders the Result Headers as “pretty” JSON
// Renders the Result Body as “pretty” JSON

import React from 'react';
import './results.scss';

function Results (props) {

  console.log('PROPS IN RESULTS.JS:', props)

  

  return (<div className="App-results">
    <h1>SUP!</h1>
  </div>);

}

export default Results;

