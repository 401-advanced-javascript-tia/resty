import React from 'react';
import md5 from 'md5';
import axios from 'axios';

// import './design/design.scss';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import History from './components/history/history.js';
import Results from './components/results/results.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: null,
      headers: null,
      results: [],
      loading: false,
      request: {},
      history: {},
    }
  }

  //class method that can update state. it gets (takes in as parameters) stuff from this.props.handler on the Form itself and uses it to set state
  // handleForm = (headers, count, results) => {
  //   this.setState({count, results, headers});
  // }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  updateRequest = (request) => {

    // console.log('!!!!REQ IN UPDATEREQUEST:', request);
    this.setState({ request });
  }

  updateHistory = (request) => {

    let hash = md5(JSON.stringify(request));

    // console.log(hash);
    
    const history = { ...this.state.history, [hash]: request};
    
    // console.log('HISTORY IN UPDATE HISTORY:', history);

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });

  }

  updateResults = (headers, count, results) => {

    this.setState({headers, count, results});
  }


  fetchResults = async (request) => {

    // i think i need to drill into request
    // console.log('REQUEST IN FETCHRESULTS IN APP:', request);

    this.toggleLoading()
    this.updateRequest(request);

    let response = await axios(request);

    // console.log('RESPONSE FROM AXIOS IN FETCHRESULTS:', response);
    // console.log('COUNT IN RESPONSE FROM AXIOS IN FETCHRESULTS:', response.data.count);

    setTimeout( () => {
      this.toggleLoading();
    }, 1000);

    this.updateHistory(request);

    this.updateResults(response.headers, response.data.count, response.data.results);

  }


  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }


  render(){
  return (
    <div className="App">
      <Header />
      {/* <Form handler={this.handleForm}/> */}
      <Form request={this.state.request} handler={this.fetchResults} />
      <History historyHandler={this.updateRequest} calls={this.state.history}/>
      <Results loading={this.state.loading} count={this.state.count} results={this.state.results} headers={this.state.headers} />
      <Footer />
    </div>
  );
  }
}

export default App;
