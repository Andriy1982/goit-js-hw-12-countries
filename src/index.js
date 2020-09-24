import './styles.css';
import refs from './js/refs'
import { updateListCountry, updateCountry, clearCountry } from './js/markupCountry'
import fetchCountries from './js/fetch-countries';
import error from './js/alert.js';

const debounce = require('lodash.debounce');

const debounsCallback = debounce(hendleInput, 1000);

function hendleInput(event) {
  const value = event.target.value;
  clearCountry();
  if (!value) return;
  fetchCountries(value)
  .then(data => { 
      if(data.message) {
        return error({
          title: data.message
        })
      }
    if (data.length > 10) {
      // console.log(data);
      return error({
        title: 'Too many matches found. Please enter a more specific query!',
      });
    }
    if (data.length >= 2) {
     return updateListCountry(data)
    }
    // if (data.length = 1) {
    //  console.log(data.length);
      updateCountry(data);
    // }
  })
}

refs.input.addEventListener('input', debounsCallback);