import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Homepage';
import Work from '../components/Work';
import Detail from '../components/WorkDetail';

class App extends Component {

  renderHome = () => {
    return <Home />;
  }

  // renderDetail = () => {
  //   return <Detail />;
  // }

  renderDetailMetId = ({match}) => {
    console.log('what is going on');
    const {_id} = match.params;
    return <Detail _id={_id} />;
    // <div> <RequestDetail _id={_id} /></div>
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/work' component={Work} />
          {/* <Route exact path='/workdetail' render={this.renderDetail} /> */}
          <Route exact path='/workdetail/:_id' render={this.renderDetailMetId} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
