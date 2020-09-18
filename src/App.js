import React from 'react';
import md5 from 'md5';
import axios from 'axios';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import History from './components/history/history.js';
import Results from './components/results/results.js';
import HistoryPage from './components/historyPage/history-page.js';
import Help from './components/help/help.js';
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


  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }



  updateRequest = (request) => {
    // console.log('!!!!REQ IN UPDATEREQUEST:', request);
    this.setState({ request });
  }



  updateHistory = (request) => {

    // console.log(hash);
    let hash = md5(JSON.stringify(request));
    const history = { ...this.state.history, [hash]: request};

    // console.log('HISTORY IN UPDATE HISTORY:', history);
    
    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
    
  }


  updateResults = (headers, count, results) => {
    this.setState({headers, count, results});
  }



  // gets (takes in as parameters) stuff from this.props.handler on the Form itself and uses it to do its work
  fetchResults = async (request) => {

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
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/">
            <Form request={this.state.request} handler={this.fetchResults} />
            <History historyHandler={this.updateRequest} calls={this.state.history}/>
            <Results loading={this.state.loading} count={this.state.count} results={this.state.results} headers={this.state.headers} />
          </Route>

          <Route exact path="/history">
            <HistoryPage />
          </Route>

          <Route exact path="/help">
            <Help />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
