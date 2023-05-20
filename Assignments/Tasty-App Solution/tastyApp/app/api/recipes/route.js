import { getRecipes, addRecipe } from "./recipe-repo.js";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const region = searchParams.get("region");

        const recipes = await getRecipes(region);
        return Response.json(recipes, { status: 200 });

    } catch (e) {
        console.log(e);
        return Response.json({ error: "There was an internal error" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const newRecipe = await request.json();
        const added = await addRecipe(newRecipe);

        return Response.json(added, { status: 200 });
    } catch (e) {
        console.log(e);
        return Response.json({ error: "There was an internal error" }, { status: 500 });
    }
}