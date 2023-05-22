fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country and display its flag URL
    data.forEach(country => {
      console.log(country.flags.png);
    });
  })
  .catch(error => console.log(error));
