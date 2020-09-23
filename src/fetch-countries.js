function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url).then(respons => respons.json());
  // .then(filterCountriesByName)
  //   .then(data => {
  //     console.log(data.length);
  //     console.log(data);
  //   if (data.length > 10) {
  //     notice({
  //       title: 'Regular Notice',
  //       text: "I'm a notice.",
  //       delay: 10000,
  //       icon: true,
  //     });
  //     return console.log('Many');
  //   }
  //   })
}
export default fetchCountries;
