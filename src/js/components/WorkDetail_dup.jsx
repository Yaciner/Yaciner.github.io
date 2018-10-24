import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import bodymovin from 'lottie-web';

class WorkDetail extends Component {
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

      bodymovin.loadAnimation({
         container: document.querySelector(`.next-animation`),
         renderer: `svg`,
         loop: false,
         autoplay: true,
         path: `../assets/data/line.json`
       });
  }

  render() {
    let project = this.state.data;
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
          </section>
          <section className="project-information">
            <article className="project-information__target">
              <article className="target-title">
                <h1 className="target-title__header">
                  {
                    project ? project[this.state.case].maintitle : null
                  }
                </h1>
                <p className="target-title__skills">
                  {
                    project ? project[this.state.case].skills : null
                  }
                </p>
              </article>
              <article className="target-info">
                <div></div>
                <p>
                  {
                    project ? project[this.state.case].target.one : null
                  }
                </p>

                <p>
                  {
                    project ? project[this.state.case].target.two : null
                  }
                </p>
              </article>
            </article>
          </section>

        </main>
        </div>
      );
  }
};


export default WorkDetail;
