import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';

function Results (props) {


  // console.log('PROPS IN RESULTS.JS:', props)

  // let results = props.results;

  // console.log('RESULTS IN RESULTS.JS', results);

  return (<div className="App-results">
    <h3 data-testid="count">Count: {props.count}</h3>
    <h3>Headers: {props.headers}</h3>
    <div data-testid="results">Response: <JSONPretty data={props.results}></JSONPretty></div>
   
    {/* <ul>{
    results.map(result => <li>{JSON.stringify(result)}</li>)
    }</ul> */}

  </div>);

}

export default Results;

