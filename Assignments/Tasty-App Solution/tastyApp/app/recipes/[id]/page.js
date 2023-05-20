import styles from '../../page.module.css'
import { getRegions, getRecipe, addRecipe, updateRecipe } from '../../actions/recipe'


// This page will be used for both editing and adding recipes
export default async function RecipeForm({ params }) {

    // If the id is 'add' then we will add a new recipe [this means no ID] in the route
    const isEdit = params.id !== 'add' && params.id !== undefined

    // Get the regions for the dropdown using the server actions
    const regions = await getRegions()

    let recipe = { name: '', image: '', region: '', ingredients: '', instructions: '' }

    // If we are editing a recipe then get the recipe from the server so we can edit it
    // we will also use this recipe to pre-populate the form
    if (isEdit) recipe = await getRecipe(params.id)

    return (
        // The form will be submitted to the server using the server actions
        <form id="recipe-form" action={isEdit ? updateRecipe : addRecipe}>
            {isEdit && <input type="hidden" name="id" defaultValue={recipe.id} />}

            <div className={styles.formGroup}>
                <label htmlFor="name">Recipe Name:</label>
                <input type="text" id="name" name="name" defaultValue={recipe.name} />
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input type="url" id="image" name="image" defaultValue={recipe.image} />
            </div>
            <div>
                <label htmlFor="region">Region</label>
                <input type="text" id="region" name="region" defaultValue={recipe.region} />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea id="ingredients" name="ingredients" rows="4" defaultValue={recipe.ingredients}></textarea>
            </div>

            <div>
                <label htmlFor="instructions">Cooking Instructions:</label>
                <textarea id="instructions" name="instructions" rows="8" defaultValue={recipe.instructions}></textarea>
            </div>
            <input type="submit" id="submit-recipe-btn" defaultValue={isEdit ? 'Update Recipe' : 'Add Recipe'} />
        </form>)
}