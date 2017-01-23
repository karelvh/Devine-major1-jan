const changeFavicon = () => {
  const $favicon = document.querySelector(`#favicon`);
  const title = document.title;
  const newTitle = `Adventure awaits!`;
  document.addEventListener(`visibilitychange`, function() {
    document.title = document.hidden ? newTitle : title;
    document.hidden ? $favicon.href = `./assets/img/logor.ico` : $favicon.href = `./assets/img/logob.ico`;
  });
};

export default () => {
  changeFavicon();
};
