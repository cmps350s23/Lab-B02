//  get the link to the elements inside your html
const regionDL = document.querySelector('#region');
const countryDD = document.querySelector('#country');
const factsArea = document.querySelector('#facts-area');

// URL to the API
const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

// create a function that download the content from the given APIs

async function handleRegionChange() {
    const url = `${regionURL}${regionDL.value}`
    const data = await fetch(url)
    const countries = await data.json()

    const options = countries.map(country => ` 
        <option value="${country.name.common}" > 
                ${country.name.common} 
        </option>
    `)
    countryDD.innerHTML = options

}

async function handleCountryChange() {
    // concatinate country url with the selected country
    //get the data using the new url
    //parse it
    //console.log
    const url = `${countryURL}${countryDD.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const factsHTML = changeCountryToFacts(countries[0])
    factsArea.innerHTML = factsHTML
}

function changeCountryToFacts(country) {
    return `
        <h2> Facts About ${country.name.common} </h2>
    `
}