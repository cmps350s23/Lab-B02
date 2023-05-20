import path from 'path'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const dataPath = path.join(process.cwd(), 'data/recipes.json')

export const getRecipes = async (region) => await prisma.recipe.findMany({
    where: {
        ...(region && region.toLowerCase() !== "all" ? { region } : {}),
    }
})
export const getRegions = async () => await prisma.recipe.findMany({
    select: { region: true }
})
export const getRecipe = async (id) => await prisma.recipe.findUnique({ where: { id: +id } })
export const addRecipe = async (recipe) => await prisma.recipe.create({ data: recipe })
export const updateRecipe = async (id, updatedRecipe) => await prisma.recipe.update({ where: { id: +id }, data: updatedRecipe });
export const deleteRecipe = async (id) => await prisma.recipe.delete({ where: { id: +id } })

// +id means to convert the id to a number