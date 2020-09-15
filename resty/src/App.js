import React from 'react';
import './design/design.scss';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: null,
      headers: {},
      results: [],
    }
  }

  //class method that can update state. it gets (takes in as parameters) stuff from this.props.handler on the Form itself and uses it to set state
  handleForm = (headers, count, results) => {
    console.log('COUNT in APP:', count);
    console.log('HEADERS in APP:', headers);
    console.log('RESULTS in APP:', results);

    // headers = {coming: 'soon'};

    this.setState({count, results, headers});
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Form handler={this.handleForm}/>
      <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
      <Footer />
    </div>
  );
  }
}

export default App;
