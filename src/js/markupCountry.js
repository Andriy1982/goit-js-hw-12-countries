import listTemplate from '../templates/list.hbs';
import conntryTemplate from '../templates/country.hbs';
import refs from './refs'

export function updateListCountry (coutries) {
    const markup = listTemplate(filterCountriesByName(coutries));
    refs.wrap.innerHTML = markup;
}

export function updateCountry (country) {
     const markupCountry = conntryTemplate(country[0]);
    refs.wrap.innerHTML = markupCountry;
}

export function clearCountry () {
    refs.wrap.innerHTML = '';
}

function filterCountriesByName(arr) {
    return arr.map(item => item.name)};