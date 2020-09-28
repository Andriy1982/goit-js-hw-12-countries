function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(respons => respons.json())
    .catch(error => error);
}
export default fetchCountries;
