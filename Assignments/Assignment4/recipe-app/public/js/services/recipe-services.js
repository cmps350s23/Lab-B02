// replace this with your own url that reads data from the data/recipes.json file
const BASE_URL = 'https://gist.githubusercontent.com/abdalabaaji/8ac1f0ff9c9e919c72c5f297a9b5266e/raw/a67887ba7445a6887be4c748fcfa0931f0dd165c/recipes'

export async function getRecipes() {
    if (!localStorage.recipes) {
        console.log('loading from API');
        const data = await fetch(BASE_URL);
        const recipes = await data.json();
        localStorage.recipes = JSON.stringify(recipes);
        return recipes;
    }
    else {
        console.log('loading from local storage');
        return JSON.parse(localStorage.recipes);
    }
}
export async function getRecipe(id) {
    const recipes = await getRecipes();
    return recipes.find(recipe => recipe.id == id);
}

export async function addRecipe(recipe) {
    const recipes = await getRecipes();
    recipe.id = Math.max(...recipes.map(r => r.id)) + 1
    recipes.push(recipe);
    localStorage.recipes = JSON.stringify(recipes);
}
export async function updateRecipe(id, updatedRecipe) {
    const recipes = await getRecipes();
    const index = recipes.findIndex(recipe => recipe.id == id);
    recipes[index] = { ...recipes[index], ...updatedRecipe };
    localStorage.recipes = JSON.stringify(recipes);
}

export async function deleteRecipe(id) {
    const recipes = await getRecipes();
    const newRecipes = recipes.filter(recipe => recipe.id != id);
    localStorage.recipes = JSON.stringify(newRecipes);
}