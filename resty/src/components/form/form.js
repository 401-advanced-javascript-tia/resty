import React from 'react';

class Form extends React.Component {

  constructor(properties) {
    super(properties);
    this.state = {
      link: null,
      method: null,
    }
  }


  handleURLClick = event => {
    event.preventDefault();
    //how to get the value from the input here??
    let link = event.target.value;
    this.setState({link});
  }

  handleMethodClick = event => {
    event.preventDefault();
    let method = event.target.value;
    this.setState({method})
  }


  render() {
    return (<div>
      <h2>URL:</h2>
      <input/>
      <button onClick={this.handleURLClick}>Go!</button>
      <br></br>
      <button onClick={this.handleMethodClick}>GET</button>
      <button onClick={this.handleMethodClick}>POST</button>
      <button onClick={this.handleMethodClick}>PUT</button>
      <button onClick={this.handleMethodClick}>DELETE</button>
      <p>{this.state.link}</p>
    </div>)
  }
}


export default Form;
