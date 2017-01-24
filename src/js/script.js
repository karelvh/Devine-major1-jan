import favicon from './lib/favicon';

const errorLoading = err => {
  console.error(`Dynamic page loading failed`, err);
};

const init = () => {

  favicon();

  if (document.querySelector(`#store`)) {
    import(`./lib/storeShowcase`).then(module => {module.default();}).catch(errorLoading);
  }

};

init();
