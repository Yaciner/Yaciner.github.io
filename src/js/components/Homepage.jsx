import React from 'react';

const Homepage = ({onNewFeedback}) => {

  return (
    <div class="home">
    <div><p class="status"></p></div>
    <header>
      <nav>
        <div class="name">
          <span>Yacine.</span>
        </div>
      </nav>
    </header>

    <main>
      <section class="page-home active" id="page-home">
        <div class="page-controls">
          <p class="page-controls__work">work</p>
        </div>
        <h1 class="page-home__title">
          I'm a digital designer and developer<br></br>
          <span class="page-home__subtitle">currently looking for an internship</span>
        </h1>
        <div class="anim"></div>
      </section>

      <section class="page-work" id="page-work">
        <section class="page-work__content">
          <div class="content-title__frame">
            <h1 class="content-title">
              Vertigo
            </h1>
          </div>
          <div class="content-summary">
            <p class="content-summary__text">
              Turned McDonald’s Netherlands app into a rich,
              personalised user experience. Enabling rewards,
              loyalty and geo-targeted offers with fun UI animations.
              With great team effort we managed to design and develop
              this app within 2-3 months.
            </p>
          </div>
        </section>
        <section class="work-frame">
          <div class="work-frame__indicator">
            <p class="work-frame__indicator-p">
              <span class="current">
              1
              </span>
              <span class="slash">
              /
              </span>
              <span class="total">
              9
              </span>
            </p>
          </div>
          <div class="work-frame__button">
            <p class="work-frame__button-p">
              view case
            </p>
          </div>
        </section>
      </section>
    </main>
    </div>
  );
};


export default Homepage;
