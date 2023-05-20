import { getRegions } from './actions/recipe';
import { getRecipes } from './api/recipes/recipe-repo'

import RecipesList from './recipes/recipesList';

export default async function Home() {
  const initialRecipes = await getRecipes();
  const regions = await getRegions()

  // Get unique region names from the returned regions
  const uniqueRegionNames = [...new Set(regions.map(r => r.region))]

  return (
    <RecipesList initialRecipes={initialRecipes} regions={uniqueRegionNames} />
  )
}
