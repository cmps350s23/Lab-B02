import { getUser } from "../user-repo"

export async function POST(request) {
    const { email, password } = await request.json()
    const response = await getUser(email, password)

    if (response.error)
        return Response.json(response, { status: 401 })

    // Generate JWT token and add it to the response


    return Response.json(response, { status: 200 })
}