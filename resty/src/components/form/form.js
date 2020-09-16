import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      link: null,
      method: 'get',
      data: '',
    }
  }
  
  handleMethodClick = event => {
    event.preventDefault();
    let method = event.target.value;
    this.setState({method})
  }
  
  handleURLChange = event => {
    let link = event.target.value;
    this.setState({link});
  }

  changeBody = event => {
    let data = event.target.value;
    console.log('DATA IN CHANGEBODY IN FORM.JS:', data);
  }


  handleSubmit = async event => {

    event.preventDefault();

    // let raw = await fetch(this.state.link);
    // let headers = await raw.headers.get('content-type');
    // let data = await raw.json();
    // let count = data.count;
    // let results = data.results;

    this.props.handler(this.state);

  }


  render() {
    return (<div className="App-form">
      <ul>
        <li><button value="get" onClick={this.handleMethodClick}>GET</button></li>
        <li><button value="post" onClick={this.handleMethodClick}>POST</button></li>
        <li><button value="put" onClick={this.handleMethodClick}>PUT</button></li>
        <li><button value="delete" onClick={this.handleMethodClick}>DELETE</button></li>
      </ul>
      <textarea name="data" onChange={this.changeBody} defaultValue={this.state.data} />
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="url" defaultValue={this.state.link} placeholder="URL" onChange={this.handleURLChange}/>
        <button>Go!</button>
      </form>
    </div>)
  }

}



export default Form;
