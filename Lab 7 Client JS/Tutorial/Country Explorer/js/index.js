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
    handleCountryChange()

}

async function handleCountryChange() {
    // concatenate country url with the selected country
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
    const currKey = Object.keys(country.currencies)[0]
    const languages = Object.values(country.languages).join(' - ')

    return `
        <u><h2>  Facts About ${country.name.common} </h2></u>
        <img src="${country.flags.png}" alt="${country.flags.alt}">
        <br>
        <table>
            <tr>
                <th>Official Name</th>
                <td>${country.name.official}</td>
            </tr>
            <tr>
                <th>Capital City</th>
                <td>${country.capital}</td>
            </tr>
            <tr>
                <th>Currencies</th>
                <td>${country.currencies[currKey].name}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td>${country.population}</td>
            </tr>
            <tr>
                <th>Languages</th>
                <td>${languages}</td>
            </tr>

        </table>
    `
}


// const person = {
//     name: "Ali",
//     age: 22
// }

// const keys = Object.keys(person)

// console.log(person.name);
// console.log(person['name']);
// console.log(person[keys[0]]);
// console.log(Object.values(person));