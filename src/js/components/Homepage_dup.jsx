import React from 'react';
import { Link } from 'react-router-dom';
// import animateElements from '../lib/animateElements';

const Homepage = () => {
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
          <p className="page-controls__work">work</p>
        </div>
        <h1 className="page-home__title">
          I'm a digital designer and developer<br></br>
          <span className="page-home__subtitle">currently looking for an internship</span>
        </h1>
        <div className="anim"></div>
      </section>

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
              <Link to="/work">view case</Link>
            </p>
          </div>
        </section>
      </section>
    </main>
    </div>
  );
};


export default Homepage;
