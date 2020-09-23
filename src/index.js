import './styles.css';
import listTemplate from './templates/list.hbs';
import conntryTemplate from './templates/country.hbs';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
// import 'material-design-icons/iconfont/material-icons.css';
import { data } from 'autoprefixer';

import { alert, notice, info, success, error } from '@pnotify/core';

// import { notice, defaultModules } from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';
import { defaults } from '@pnotify/core';

import fetchCountries from './fetch-countries';

PNotifyDesktop.defaults = {
  fallback: false,
};

// console.log(PNotifyDesktop);

//   error({
//     text: "I'm an error message.",
//     delay: 180000,
//     width: '360px',
//     maxTextHeight: '150px',
//   });
//   console.log('Error', erro);
// });

// const myNotice = notice({
//   text: "I'm a notice.",
// });

// console.log(myError);

const myNotice = notice({
  title: 'Regular Notice',
  text: "I'm a notice.",
  delay: 1000,
  icon: true,

  //   modules: new Map([
  //     ...defaultModules,
  //     [
  //       PNotifyDesktop,
  //       {
  //         text: null,
  //         // Desktop Module Options
  //       },
  //     ],
  //   ]),
});

// PNotify.notice({
//   title: 'Regular Notice',
//   text: "Check me out! I'm a notice.",
// });

// console.log(myNotice);

const debounce = require('lodash.debounce');

console.log('Hello');

const inputRef = document.querySelector('.js-input');
const articleRef = document.querySelector('.intro');
const wrapeRef = document.querySelector('.wrap');
// const url = 'https://restcountries.eu/rest/v2/name/Ta';

const debounsCallback = debounce(hendleInput, 1000);

function hendleInput(event) {
  const value = event.target.value;
  console.log(value);
  fetchCountries(value).then(data => {
    if (data.length > 10) {
      console.log(data);
      return error({
        title: 'Regular Notice',
        text: "I'm a notice.",
        // delay: 1000,
        icon: true,
      });
    }
    if (data.length >= 2) {
      const markup = listTemplate(filterCountriesByName(data));
      console.log(markup);
      return (wrapeRef.innerHTML = markup);
      //   console.log(data);
      // filterCountriesByName(data);
    }
    const markupCountry = conntryTemplate(data[0]);
    console.log(data[0]);
    wrapeRef.innerHTML = markupCountry;
  });
  //   const myError = error({
  //     text: "I'm an error message.",
  //     delay: 500,
  //   });
  //   const { currentTarget } = event;
  //   console.log(currentTarget.value);
}

inputRef.addEventListener('input', debounsCallback);

// console.log(fetchCountries('swit'));

function filterCountriesByName(arr) {
  return arr.map(item => item.name);
}

// const markup = listTemplate(data);
// console.log(markup);
// articleRef.insertAdjacentHTML('beforeend', markup);
// console.log(data);
