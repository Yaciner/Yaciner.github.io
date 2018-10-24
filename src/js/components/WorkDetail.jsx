import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import bodymovin from 'lottie-web';
let called = false;

export default class WorkDetail extends Component {
  state = {
    project: null,
    error: null
  }

  componentDidMount() {
    if (!this.state.project) {
      fetch('./assets/data/projectdata.json', {
        headers : {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(results => {

          this.setState({
            project: results
          });

        }).catch((e => this.setState({ error: e })));
    }
  }

  onHover() {
    if(called === false) {
      this.animate();
      called = true;
    }
    else {
      this.onOut();
    }

  }

  onOut() {
    console.log('mouse out');
    called = false;
  }

  animate() {
    bodymovin.loadAnimation({
       container: document.querySelector(`.animation-next`),
       renderer: `svg`,
       loop: false,
       autoplay: true,
       path: `../assets/data/stroke.json`
     });
  }

  render() {
    const { error, project } = this.state;
    const { _id } = this.props;

    if (error) return <h1>An error occured</h1>
    if (!project) return <h1>loading</h1>

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
            <Link className="page-work__back" to="/work">
              <img className="page-work__back_arrow" src="./assets/svg/arrow.svg" alt="arrow" />
             <p>Back to cases</p>

            </Link>
            <div className="content-title__frame">
              <h1 className="content-title">
                {
                    project ? project[_id].name : null
                  }
              </h1>
              <div className="drawline">

              </div>
            </div>
            <div className="content-summary">
              <p className="content-summary__text">
                {
                    project ? project[_id].summary : null
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
                      project ? project[_id].role : null
                    }
                </p>
              </div>
              <div className="content-info__agency">
                <p className="content-info__title">
                  Agency
                </p>
                <p className="content-info__body">
                  {
                      project ? project[_id].agency : null
                    }
                </p>
              </div>
                <div className="content-info__year">
                  <p className="content-info__title">
                    Year
                  </p>
                  <p className="content-info__body">
                    {
                        project ? project[_id].year : null
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
                  project ? project[_id].maintitle : null
                }
              </h1>
              <p className="target-title__skills">
                {
                  project ? project[_id].skills : null
                }
              </p>
            </article>
            <article className="target-info">
              <div></div>
              <p>
                {
                  project ? project[_id].target.one : null
                }
              </p>

              <p>
                {
                  project ? project[_id].target.two : null
                }
              </p>
            </article>
          </article>
        </section>
        <section className="project-fonts">
          <article className="project-fonts__big">
            <article>
              <span className={project ? project[_id].fonts.name + "bold" : null} >Aa</span>
              <span className="project-fonts__name">{project ? project[_id].fonts.heading : null}</span>

            </article>
            <article>
              <span className={project ? project[_id].fonts.name + "regular" : null}>Aa</span>
              <span className="project-fonts__name">{project ? project[_id].fonts.body : null}</span>
            </article>
          </article>
          <article className="project-fonts__example">
            <p className={project ? project[_id].fonts.name + "head" : null}>{project ? project[_id].name : null}</p>
            <p className={project ? project[_id].fonts.name + "body" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </article>
        </section>

        <section className="project-next">
          <Link to={"/workdetail/" + parseInt(_id + 1)}>
          <p>
            {/* <div className="animation-next" onMouseOver={this.onHover.bind(this)} onMouseOut={this.onOut.bind(this)} ></div> */}
            <div className="animation-text">Next Project</div>
          </p>
        </Link>
        </section>
      </main>
      </div>
    );
  }
}
