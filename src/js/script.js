// import bodymovin from 'lottie-web';
// import fullpage from 'fullpage.js';
//
// const init = () => {
//   bodymovin.loadAnimation({
//     container: document.querySelector(`.anim`),
//     renderer: `svg`,
//     loop: true,
//     autoplay: true,
//     path: `../assets/data/data.json`
//   });
//   controls();
// };
//
// const controls = () => {
//   document.querySelector(`.page-controls__work`).addEventListener(`click`, showWork);
// }
//
// const showWork = () => {
//   new fullpage('#page-work', {
// 	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
// 	autoScrolling:true,
// 	scrollVertically: true
// });
// }
//
// init();

import React from 'react';
import {render} from 'react-dom';
import App from './container/App';
const init = () => {

  render(
    <App />,
    document.querySelector(`.react-mount`)
  );

};

init();
