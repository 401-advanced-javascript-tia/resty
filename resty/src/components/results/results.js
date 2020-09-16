import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';

import loading from '../../../src/loading.gif';

function Results (props) {

  console.log('PROPS IN RESULTS.JS:', props);


  return (<div className="App-results">


    { props.loading ? (
      <div className="Results-loading">
        <img src={loading} alt="Loading" />
      </div>
    ) : (
      <>
        <h3 data-testid="count">Count: {props.count}</h3>
        <h3>Headers: {JSON.stringify(props.headers)}</h3>
        <div data-testid="results">Response: <JSONPretty data={props.results}></JSONPretty></div>
      </>
    )
  }

    {/* <ul>{
    results.map(result => <li>{JSON.stringify(result)}</li>)
    }</ul> */}

  </div>);

}

export default Results;

