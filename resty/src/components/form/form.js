import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      link: null,
      method: 'get',
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

  handleSubmit = async event => {

    event.preventDefault();

    let raw = await fetch(this.state.link);
    let headers = await raw.headers.entries()
    let data = await raw.json();
    let count = data.count;
    let results = data.results;
    // NEED TO PRETTIFY THIS??

    console.log('HEADERS:', headers)
    console.log('DATA:', data);

    this.props.handler(headers, count, results);

  }


  render() {
    return (<div className="App-form">
      <ul>
        <li><button value="get" onClick={this.handleMethodClick}>GET</button></li>
        <li><button value="post" onClick={this.handleMethodClick}>POST</button></li>
        <li><button value="put" onClick={this.handleMethodClick}>PUT</button></li>
        <li><button value="delete" onClick={this.handleMethodClick}>DELETE</button></li>
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="url" placeholder="URL" onChange={this.handleChange}/>
        <button>Go!</button>
      </form>
      {/* <p>{this.state.method} : {this.state.link}</p> */}
    </div>)
  }

}



export default Form;
