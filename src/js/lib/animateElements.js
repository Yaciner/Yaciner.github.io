import Anims from './Animations';

export default () => {
  const $slidesUp = document.querySelector(`.name`);
  // const $slidesLeft = document.querySelectorAll(`.dreaming__article-left, .dimension__article-left, .memory__article-left`);
  // const $slidesRight = document.querySelectorAll(`.dreaming__article-bottom, .subscribe__article`);
  // const $flipsIn = document.querySelectorAll(`.dreaming__article-right, .dimension__article-image`);

  // $slidesUp.forEach(elem => {
  //   Anims(elem, `transition.slideUpIn`, 3000);
  // });

  Anims($slidesUp, `transition.slideUpIn`, 3000);
  // $slidesLeft.forEach(elem => {
  //   Anims(elem, `transition.slideLeftIn`, 1000);
  // });
  // $flipsIn.forEach(elem => {
  //   Anims(elem, `transition.flipXIn`, 1000);
  // });
  // $slidesRight.forEach(elem => {
  //   Anims(elem, `transition.slideRightIn`, 1000);
  // });

};
