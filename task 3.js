fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country and print the desired information
    data.forEach(country => {
      console.log('Country:', country.name.common);
      console.log('Region:', country.region);
      console.log('Subregion:', country.subregion);
      console.log('Population:', country.population);
    });
  })
  .catch(error => console.log(error));