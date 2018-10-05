import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {workPage} from '../lib/animateElements';

class Work extends Component {
  componentDidMount() {
    workPage();
  }
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
        <section className="page-work" id="page-work">
          <section className="page-work__content">
            <div className="content-title__frame">
              <h1 className="content-title">
                Vertigo
              </h1>
            </div>
            <div className="content-summary">
              <p className="content-summary__text">
                Turned McDonald’s Netherlands app into a rich,
                personalised user experience. Enabling rewards,
                loyalty and geo-targeted offers with fun UI animations.
                With great team effort we managed to design and develop
                this app within 2-3 months.
              </p>
            </div>
            <div className="content-summary__image">
              <img src="./assets/img/vertigo.png" alt="Vertigo" />
            </div>
          </section>
          <section className="work-frame">
            <div className="work-frame__indicator">
              <p className="work-frame__indicator-p">
                <span className="current">
                1
                </span>
                <span className="slash">
                /
                </span>
                <span className="total">
                9
                </span>
              </p>
            </div>
            <div className="work-frame__button">
              <p className="work-frame__button-p">
                <Link to="/workdetail">view case</Link>
              </p>
            </div>
          </section>
        </section>
      </main>
      </div>
    );
};
};


export default Work;
