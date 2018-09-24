import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Homepage';
import Work from '../components/Work';

class App extends Component {
  componentDidMount() {

  }

  activateScroll = (props) => {
    console.log('im in');
    if(props.match.url == '/') {
      console.log("DO THE SCROLL ACTION");
    }
  }


  renderHome = (props) => {
    setInterval(() => {document.addEventListener('scroll', this.activateScroll(props));}, 3000);
    return <Home />;
  }

  renderDetail = () => {
    return <Work />;
  }

  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route exact path='/work' render={this.renderDetail} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
