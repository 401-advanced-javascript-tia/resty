import React from 'react';
import { If, Then, Else, When } from '../if/if.js';
import JSONPretty from 'react-json-pretty';
import './results.scss';

import loading from '../../../src/loading.gif';

function Results (props) {

  console.log('PROPS IN RESULTS.JS:', props);


  return (<div className="App-results">


  {/* can we do an if else in a ternary, to account for not showing results until there are some? */}

    {/* { props.loading ? (
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
  } */}


  <If conditon={props.loading}>
    <Then>
      <div className="Results-loading">
        <img src={loading} alt="Loading" />
      </div>
    </Then>
    <Else>
      <When condition={props.results.length > 0}>
        <>
          <h3 data-testid="count">Count: {props.count}</h3>
          <h3>Headers: {JSON.stringify(props.headers)}</h3>
          <div data-testid="results">Results: <JSONPretty data={props.results}></JSONPretty></div>
        </>
      </When>
    </Else>
  </If>

  </div>);

}

export default Results;

