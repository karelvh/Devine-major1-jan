const $option1Link = document.querySelector(`#option1`);
const $option1Img = document.querySelector(`#option1_img`);
const $option1Info = document.querySelector(`#option1_info`);
const $option1 = {link: $option1Link, image: $option1Img, info: $option1Info};

const $option2Link = document.querySelector(`#option2`);
const $option2Img = document.querySelector(`#option2_img`);
const $option2Info = document.querySelector(`#option2_info`);
const $option2 = {link: $option2Link, image: $option2Img, info: $option2Info};

const $option3Link = document.querySelector(`#option3`);
const $option3Img = document.querySelector(`#option3_img`);
const $option3Info = document.querySelector(`#option3_info`);
const $option3 = {link: $option3Link, image: $option3Img, info: $option3Info};

const $option4Link = document.querySelector(`#option4`);
const $option4Img = document.querySelector(`#option4_img`);
const $option4Info = document.querySelector(`#option4_info`);
const $option4 = {link: $option4Link, image: $option4Img, info: $option4Info};

const $option5Link = document.querySelector(`#option5`);
const $option5Img = document.querySelector(`#option5_img`);
const $option5Info = document.querySelector(`#option5_info`);
const $option5 = {link: $option5Link, image: $option5Img, info: $option5Info};

let $lastChanged = $option1;

const setLastChanged = lastChanged => {
  $lastChanged.link.className = ``;
  $lastChanged.image.className = `hide`;
  $lastChanged.info.className = `package_info hide`;
  $lastChanged = lastChanged;
};

export default () => {

  console.log($lastChanged);

  $option1Link.addEventListener(`click`, e => {
    e.preventDefault();
    setLastChanged($option1);


    $option1.link.className = `active`;
    $option1.image.className = ``;
    $option1.info.className = `package_info`;
  });

  $option2Link.addEventListener(`click`, e => {
    e.preventDefault();
    setLastChanged($option2);

    $option2.link.className = `active`;
    $option2.image.className = ``;
    $option2.info.className = `package_info`;

  });

  $option3Link.addEventListener(`click`, e => {
    e.preventDefault();
    setLastChanged($option3);

    $option3.link.className = `active`;
    $option3.image.className = ``;
    $option3.info.className = `package_info`;
  });

  $option4Link.addEventListener(`click`, e => {
    e.preventDefault();
    setLastChanged($option4);

    $option4.link.className = `active`;
    $option4.image.className = ``;
    $option4.info.className = `package_info`;
  });

  $option5Link.addEventListener(`click`, e => {
    e.preventDefault();
    setLastChanged($option5);

    $option5.link.className = `active`;
    $option5.image.className = ``;
    $option5.info.className = `package_info`;
  });

};
