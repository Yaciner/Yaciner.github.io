import Velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

const Anim = ($el, animString, offsetMore) => {
  handlePageScroll($el, animString, offsetMore);
  addHideClass($el);
};

const handlePageScroll = ($el, animString, offsetMore) => {

  if ($el.classList.contains(`hide`)) {
      Velocity($el, animString);
      $el.classList.remove(`hide`);
  }
};

const addHideClass = $el => {
  $el.classList.add(`hide`);
};

export default Anim;
