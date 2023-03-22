//  get the link to the elements inside your html
const regionDL = document.querySelector('#region');
const countryDD = document.querySelector('#country');
const factsArea = document.querySelector('#facts-area');

// URL to the API
const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

// create a function that download the content from the given APIs

function handleRegionChange() {
    const url = `${regionURL}${regionDL.value}`
    const data = fetch(url)

}

