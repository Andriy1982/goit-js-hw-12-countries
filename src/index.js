import './styles.css';
import refs from './js/refs';
import {
  updateListCountry,
  updateCountry,
  clearCountry,
} from './js/markupCountry';
import fetchCountries from './js/fetch-countries';
import error from './js/alert.js';

import { debounce } from 'lodash-es';

const debounsCallback = debounce(hendleInput, 1000);

function hendleInput({ target: { value } }) {
  clearCountry();
  if (!value) return;
  fetchCountries(value).then(data => {
    if (data.message) {
      return error({
        title: data.message,
      });
    }
    if (data.length > 10) {
      return error({
        title: 'Too many matches found. Please enter a more specific query!',
      });
    }
    if (data.length >= 2) {
      return updateListCountry(data);
    }
    updateCountry(data);
  });
}

refs.input.addEventListener('input', debounsCallback);
