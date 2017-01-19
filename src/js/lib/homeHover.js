export default () => {

  const $luxury = document.querySelector(`#home-secondary_titles-luxury`);
  const $adventure = document.querySelector(`#home-secondary_titles-adventure`);
  const $wrapper = document.querySelector(`#wrapper`);
  const $homeTitle = document.querySelector(`#home-title`);

  $luxury.addEventListener(`mouseover`, () => {
    $adventure.className = `home-secondary_titles-small`;
    $wrapper.className = `wrapper wrapper-bg-luxury`;
    $homeTitle.className = `home-title-luxury`;
  });

  $luxury.addEventListener(`mouseout`, () => {
    $adventure.className = ``;
    $wrapper.className = `wrapper`;
    $homeTitle.className = ``;
  });

  $adventure.addEventListener(`mouseover`, () => {
    $luxury.className = `home-secondary_titles-small`;
    $wrapper.className = `wrapper wrapper-bg-adventure`;
    $homeTitle.className = `home-title-adventure`;
  });

  $adventure.addEventListener(`mouseout`, () => {
    $luxury.className = ``;
    $wrapper.className = `wrapper`;
    $homeTitle.className = ``;
  });
};
