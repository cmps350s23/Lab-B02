'use server'
import { redirect } from 'next/navigation'
import * as repo from '../api/recipes/recipe-repo'
import { revalidatePath } from 'next/cache'

export const getRecipes = async (region) => await repo.getRecipes(region)
export const getRegions = async () => await repo.getRegions()
export const getRecipe = async (id) => await repo.getRecipe(id)
export const deleteRecipe = async (id) => {
    await repo.deleteRecipe(id)
    revalidatePath('/')
}
export const addRecipe = async (formData) => {
    const { name, image, region, ingredients, instructions } = Object.fromEntries(formData.entries())
    const newRecipe = { name, image, region, ingredients, instructions }
    await repo.addRecipe(newRecipe)
    redirect('/')
}
export const updateRecipe = async (formData) => {
    const { id, name, image, region, ingredients, instructions } = Object.fromEntries(formData.entries())
    const updatedRecipe = { name, image, region, ingredients, instructions }
    console.log('The id to be updated is', id);
    await repo.updateRecipe(id, updatedRecipe)
    redirect('/')
}
