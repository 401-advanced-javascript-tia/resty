import React from 'react';
import './form.scss';

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
    return (<div className="App-form">
      <ul>
        <li><button onClick={this.handleMethodClick}>GET</button></li>
        <li><button onClick={this.handleMethodClick}>POST</button></li>
        <li><button onClick={this.handleMethodClick}>PUT</button></li>
        <li><button onClick={this.handleMethodClick}>DELETE</button></li>
      </ul>
      <form>
        <input type="text" name="url" placeholder="URL"/>
        <button onClick={this.handleURLClick}>Go!</button>
      </form>
      <p>{this.state.method} : {this.state.link}</p>
    </div>)
  }
}


export default Form;
