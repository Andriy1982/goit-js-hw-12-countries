function fetchCountries(searchCountry) {
  const url = `https://restcountries.eu/rest/v2/name/${searchCountry}`;
  return fetch(url)
  .then(respons => respons.json())
  .catch((error) => {console.log(error)}
  )
}
export default fetchCountries;
