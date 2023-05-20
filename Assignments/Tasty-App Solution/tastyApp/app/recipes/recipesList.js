'use client'
import React, { useState } from 'react'
import styles from '../page.module.css'
import Recipe from './recipe'
import { getRecipes, deleteRecipe } from '../actions/recipe'


export default function RecipesList({ initialRecipes, regions }) {
    const [recipes, setRecipes] = useState(initialRecipes);

    // Uses server action to delete recipe
    const handleDelete = async (id) => {
        await deleteRecipe(id);
        setRecipes(await getRecipes());
    }

    // Uses server action to get recipes by region
    const handleRegionChange = async (e) => setRecipes(await getRecipes(e.target.value));

    return (
        <>
            <select name="regions" id="regions" onChange={handleRegionChange}>
                <option value="">All</option>
                {regions.map((region, index) => <option value={region} key={index}>{region}</option>)}
            </select>

            <div className={styles.recipes} id="recipe-cards">
                {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} onDelete={handleDelete} />)}
            </div>
        </>
    )
}
