import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import bodymovin from 'lottie-web';

// const WorkDetail = ({_id}) => {
//     fetch('./assets/data/projectdata.json', {
//       headers : {
//        'Content-Type': 'application/json',
//        'Accept': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then(results => {
//         setTimeout(function () {

//           if(results.length === 4) {
//             console.log('run function');
//             dataLoaded(results);
//           }
//          }, 2000) // AFTER 2 SECONDS IT WILL RETURN

//   })
//   	.catch((e => console.log(e)));



// const dataNotLoaded = () => {
//   console.log('no data');
//   return null;
// }
// };


// export default WorkDetail;




export default class WorkDetail extends Component {
  state = {
    project: null,
    error: null
  }

  componentDidMount() {
    fetch('./assets/data/projectdata.json', {
      headers : {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(results => {
        // setTimeout(function () {

        //   if(results.length === 4) {
        //     console.log('run function');
        //     this.setState({ project: results})
            
        //   }
        //  }, 2000) // AFTER 2 SECONDS IT WILL RETURN

        this.setState({
          project: results
        });

      }).catch((e => this.setState({ error: e })));

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
  
      </main>
      </div>
    );
  }
}
