import bodymovin from 'lottie-web';

const init = () => {
  bodymovin.loadAnimation({
    container: document.querySelector(`.anim`),
    renderer: `svg`,
    loop: true,
    autoplay: true,
    path: `../assets/data/data.json`
  });
};

init();
