import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      link: null,
      method: null,
    }
  }
  
  handleMethodClick = event => {
    event.preventDefault();
    let method = event.target.value;
    this.setState({method})
  }
  
  handleChange = event => {
    console.log(event.target.value);
    let link = event.target.value;
    this.setState({link});
  }


  render() {
    return (<div className="App-form">
      <ul>
        <li><button value="get" onClick={this.handleMethodClick}>GET</button></li>
        <li><button value="post" onClick={this.handleMethodClick}>POST</button></li>
        <li><button value="put" onClick={this.handleMethodClick}>PUT</button></li>
        <li><button value="delete" onClick={this.handleMethodClick}>DELETE</button></li>
      </ul>
      <form>
        <input type="text" name="url" placeholder="URL" onChange={this.handleChange}/>
        <button>Go!</button>
      </form>
      <p>{this.state.method} : {this.state.link}</p>
    </div>)
  }

}



export default Form;
