import React from 'react';
// import { If, Then, Else, When } from '../if/if.js';
import JSONPretty from 'react-json-pretty';
import './results.scss';

import loading from '../../../src/loading.gif';

function Results (props) {

  console.log('PROPS IN RESULTS.JS:', props);


  return (<div className="App-results">


 {/* the below doesn't work to hide titles before results is true. can i add an if/if else/else into the ternary? */}

    { props.loading ? (
      <div className="Results-loading">
        <img src={loading} alt="Loading" />
      </div>
    ) : whenToShowResults()
  }

  

  {/* the loading gif doesnt work in the below */}
  {/* <If conditon={props.loading}>
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
  </If> */}

  </div>);

function whenToShowResults() {
  const markup = (
    <>
    <h3 data-testid="count">Count: {props.count}</h3>
    <h3>Headers: {JSON.stringify(props.headers)}</h3>
    <div data-testid="results">Response: <JSONPretty data={props.results}></JSONPretty></div>
    </>
  )

  if(props.results.length >= 1){
    return markup;
  }

}

}




export default Results;

