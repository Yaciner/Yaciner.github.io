import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Homepage';
import Work from '../components/Work';
import Detail from '../components/WorkDetail';

class App extends Component {
  componentDidMount() {

  }


  renderHome = () => {
    return <Home />;
  }

  renderDetail = () => {
    return <Detail />;
  }

  renderWork = () => {
    return <Work />;
  }

  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/work' render={this.renderWork} />
          <Route exact path='/workdetail' render={this.renderDetail} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
