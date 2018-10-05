import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import animateElements from '../lib/animateElements';

// const Homepage = () => {
class Homepage extends Component {
  render() {
  return (
    <div className="home">
    <div><p className="status"></p></div>
    <header>
      <nav>
        <div className="name">
          <span>Yacine.</span>
        </div>
      </nav>
    </header>
    <main>
      <section className="page-home active" id="page-home">
        <div className="page-controls">
          <div className="page-controls__empty">
            <div></div>
          </div>
          <div className="page-controls__work">
              <p><Link to='/work'>work</Link></p>
            <div></div>
          </div>
          <div className="page-controls__about">
            <Link to='/about'><p>about</p></Link>
            <div></div>
          </div>
        </div>
        <h1 className="page-home__title">
          I'm a digital designer and developer<br></br>
          <span className="page-home__subtitle">currently looking for an internship</span>
        </h1>
        <div className="anim"></div>
      </section>
    </main>
    </div>
  );
}
};


export default Homepage;
