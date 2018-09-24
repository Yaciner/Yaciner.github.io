import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Homepage';
// import StudentDetail from '../components/StudentDetail';
// import Student from '../models/Student';

class App extends Component {
  componentDidMount() {
    //LOAD JSON
  }

  renderHome = () => {
  return <Home />;
  }

  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/work/:id' render={this.renderDetail} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
