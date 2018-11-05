import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Mouse from '../lib/mouse';
import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';


// const Homepage = () => {
class Homepage extends Component {

componentDidMount() {
  Mouse();
  document.querySelector(`.circle-mouse`).style.fill = `white`;
  document.querySelector(`.page-controls__work_text`).addEventListener(`mouseenter`, this.handleMouseEnter);
  document.querySelector(`.page-controls__work_text`).addEventListener(`mouseleave`, this.handleMouseOut);
}

handleMouseEnter() {
  let $circle = document.querySelector(`.circle-mouse`);
  Velocity($circle, {marginTop: `30px`} , {loop:  true}, {easing: `ease-out`});
  $circle.style.fill = 'black';
  $circle.style.stroke = '#3d72a4';
  $circle.style.strokeWidth = 3;
}

handleMouseOut() {
  let $circle = document.querySelector(`.circle-mouse`);
  // let resetvalue = $circle.style.transform.match(/\d+/g).map(Number);
  Velocity($circle, `stop`);
  $circle.style.fill = 'white';
  $circle.style.stroke = 'none';
  $circle.style.strokeWidth = `none`;
  $circle.style.marginTop = null;
  // console.log()
  // $circle.style.transform = `translateY(-${resetvalue[0] + '.' + resetvalue[1]}px);`
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
      <svg className="circle-mouse">
      </svg>
        <section className="page-home active" id="page-home">
          <div className="page-controls">
            <div className="page-controls__empty">
              <div></div>
            </div>
            <div className="page-controls__work">
                <p className="page-controls__work_text"><Link to='/work'>work</Link></p>
              <div className="page-controls__work_line"></div>
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
