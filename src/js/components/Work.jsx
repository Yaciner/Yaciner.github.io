import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {workPage} from '../lib/animateElements';
import bodymovin from 'lottie-web';
import {Lethargy} from 'lethargy';
let lethargy = new Lethargy(1, 500, 0.05);
// let scrollPos = 0;
let supportsWheel = !1;
let animEnCours = !1
let delta = 0;
let current = 0;
let sens = !0;
let quotient = -1;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      case: 0
    };
  }

  componentDidMount() {
    fetch('./assets/data/projectdata.json', {
      headers : {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
      }
    })
      .then(this.checkStatus)
      .then(response => response.json())
      .then(data => this.setState({data}));

    workPage();
    bodymovin.loadAnimation({
       container: document.querySelector(`.drawline`),
       renderer: `svg`,
       loop: false,
       autoplay: true,
       path: `../assets/data/line.json`
     });
    document.querySelector(`.name`).style.color = '#3B3B3B';
    document.addEventListener("wheel", this.scrollEvent),
    document.addEventListener("mousewheel", this.scrollEvent),
    document.addEventListener("DOMMouseScroll", this.scrollEvent)
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent);
  };

  scrollEvent = (e) => {
    if ("wheel" === e.type)
      supportsWheel = !0;
    else if (supportsWheel)
        return;

    delta = e.deltaY || -e.wheelDelta || e.detail || 1;
    e.preventDefault();
    e.stopPropagation();

    if(lethargy.check(e) === -1) {
      console.log('down?');
      console.log(this.state.case, this.state.data.length);

      if (this.state.case <= this.state.data.length) {
        
        this.setState({case: this.state.case + 1});
      }
      workPage();
      !1 === lethargy.check(e);
      console.log(lethargy.check(e));
    }
    if(lethargy.check(e) === 1) {
        console.log('up?');
        this.setState({case: this.state.case - 1});
        workPage();
        !1 === lethargy.check(e);
        console.log(lethargy.check(e));
    }
  }

	 checkStatus = (response) => {
		if (!response.ok) throw Error(response.statusText);
    return response;
	};
  //
  // handleScroll(e) {
  //   console.log(e);
  //   // this.setState({case: this.state.case + 1 });
  // };

  render() {
      let project = this.state.data;
      return (
        <div className="home">
        <div>
          <p className="status"></p>
        </div>
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
                  {
                      project ? project[this.state.case].name : null
                    }
                </h1>
                <div className="drawline">

                </div>
              </div>
              <div className="content-summary">
                <p className="content-summary__text">
                  {
                      project ? project[this.state.case].summary : null
                    }
                </p>
              </div>
              <div className="content-info">
                <div className="content-info__role">
                  <p className="content-info__title">
                    Role
                  </p>
                  <p className="content-info__body">
                    {
                        project ? project[this.state.case].role : null
                      }
                  </p>
                </div>
                <div className="content-info__agency">
                  <p className="content-info__title">
                    Agency
                  </p>
                  <p className="content-info__body">
                    {
                        project ? project[this.state.case].agency : null
                      }
                  </p>
                </div>
                  <div className="content-info__year">
                    <p className="content-info__title">
                      Year
                    </p>
                    <p className="content-info__body">
                      {
                          project ? project[this.state.case].year : null
                        }
                    </p>
                  </div>
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
                  <Link to={`/workdetail${this.state.case}`}>view case</Link>
                  {/* <Link to={'/ideas/'+this.props.testvalue }>Create Idea</Link>
                  {`/request/${_id}`} */}
                </p>
              </div>
            </section>
          </section>
        </main>
        </div>
      );
    // }
};
};


export default Work;
