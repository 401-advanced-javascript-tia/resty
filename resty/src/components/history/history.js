import React from 'react';
import './history.scss';


function History(props) {

  console.log('PROPS IN HISTORY.JS:', props.calls);

  const calls = props.calls || {};



  return (
    <aside className="App-history">
      <h3>Sup! History!</h3>

      <ul>
        {
          Object.keys(calls).map(key => 

            <li key={key}>

              <span className="method-span">
                {props.calls[key].method}
              </span>
              <button className="link-button">
                {props.calls[key].link}
              </button>
            </li>
          )
        }
      </ul>


    </aside>

  )
}


export default History;