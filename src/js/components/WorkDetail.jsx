import React from 'react';
import { Link } from 'react-router-dom';

const WorkDetail = () => {
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
          <Link to="/work">
            <div className="page-work__back">
              <img className="page-work__back_arrow" src="./assets/svg/arrow.svg" alt="arrow" />
              <p>Back to cases</p>
            </div>
          </Link>

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

      </section>
    </main>
    </div>
  );
};


export default WorkDetail;
