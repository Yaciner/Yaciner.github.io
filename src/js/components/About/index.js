import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import {workPage} from '../../lib/animateElements';
// import bodymovin from 'lottie-web';
// import Velocity from 'velocity-animate';
// import 'velocity-animate/velocity.ui';
// import Mouse from '../../lib/mouse';
import Typed from 'typed.js';
let animationDone = false;

class About extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector(`.page-about`).classList.add(`animation-about`);
    this.animateText();
  }

  animateText() {
    let typed2 = new Typed('.about-animated__text', {
      strings: [`Hi.`, `Nice to meet you.`, `Allow me to introduce myself.`],
      typeSpeed: 30,
      backSpeed: 0,
      smartBackspace: true,
      fadeOut: true,
      loop: false,
      backDelay: 1000
    });
    if(animationDone === false) {
      setInterval(() => {
        window.scrollTo(0, window.innerHeight);
        animationDone = true;
      }, 7000)
    }

    // window.scrollTo()
   };

  render() {
    return (
      <div className="about">
      <header>
        <nav>
          <div className="name">
            <span><Link to='/'>Yacine.</Link></span>
          </div>
        </nav>
      </header>
      <main>
      <svg className="circle-mouse">
      </svg>
        <section className="page-about">

        </section>
        <section className="page-about__overlay">
          <h1 className="about-animated__text"></h1>
        </section>

        <section className="stuff-about-me">

        </section>
      </main>
      </div>

    );
  };
};


export default About;
