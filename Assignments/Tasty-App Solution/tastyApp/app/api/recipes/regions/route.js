import { getRegions } from "../recipe-repo.js";

export async function GET(request) {
    try {
        const regions = await getRegions();
        return Response.json(regions, { status: 200 });
    } catch (e) {
        console.log(e);
        return Response.json({ error: e }, { status: 500 });
    }
}