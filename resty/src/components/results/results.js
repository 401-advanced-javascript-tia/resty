// Expects the count, headers, results to be sent in as props
// Renders the count
// Renders the Result Headers as “pretty” JSON
// Renders the Result Body as “pretty” JSON

import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';

function Results (props) {


  // console.log('PROPS IN RESULTS.JS:', props)

  // let results = props.results;

  // console.log('RESULTS IN RESULTS.JS', results);

  return (<div className="App-results">
    <h1>Count: {props.count}</h1>
    <h1>Headers: {props.headers}</h1>
    <h1>Response: <JSONPretty data={props.results}></JSONPretty></h1>
   
    {/* <ul>{
    results.map(result => <li>{JSON.stringify(result)}</li>)
    }</ul> */}

  </div>);

}

export default Results;

