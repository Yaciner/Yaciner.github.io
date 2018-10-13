import React from 'react'
import { Link } from 'react-router-dom';

const showCurrent = ({project}) => {
  document.querySelector(`.name`).style.color = '#3B3B3B';

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
                  { this.state.case + 1 }
                  </span>
                  <span className="slash">
                  /
                  </span>
                  <span className="total">
                  { this.state.data ? this.state.data.length + 1 : 0 }
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
  )
}

export default showCurrent
