import fs from 'fs-extra'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const recipesPath = path.join(process.cwd(), 'data/recipes.json')

async function main() {
    try {
        const recipes = await fs.readJSON(recipesPath)
        recipes.forEach(async (recipe) => {
            delete recipe.id;
            await prisma.recipe.create({ data: recipe });
        })
    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })