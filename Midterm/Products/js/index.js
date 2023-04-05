const BASE_URL_CATEGORIES = 'https://dummyjson.com/products/categories'
const BASE_URL_PRODUCTS = 'https://dummyjson.com/products/category/'

// the two html elements that will be used to display the data
const categoriesDD = document.querySelector('#categories')
const productsDD = document.querySelector('#products')

// load html page in specific div using fetch api
async function loadPage(pageUrl) {
    const mainContent = document.getElementById('main-content');
    const page = await fetch(pageUrl)
    const pageHTMLContent = await page.text()
    mainContent.innerHTML = pageHTMLContent;

    form = document.querySelector('#product-form')
    form.addEventListener('submit', updateProduct)
}

// HINT : beside the updateBook function [which only modifies the localStorage]  , 
// you also need to create a function that calls loadPage and also populates the values into the form 
// so that the user can see the values of the book he/she is editing

let products = []
let categories = []


function formToObject(form) {
    const formData = new FormData(form)
    const data = {}
    for (const [key, value] of formData) {
        if (key === 'images')
            data[key] = value.split(',')
        else
            data[key] = value
    }
    return data;
}

function updateProduct(e) {

}