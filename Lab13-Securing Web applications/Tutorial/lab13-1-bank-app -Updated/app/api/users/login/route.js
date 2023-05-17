import { getUser } from "../user-repo"
import { sign } from "jsonwebtoken"

export async function POST(request) {
    const { email, password } = await request.json()
    const response = await getUser(email, password)

    if (response.error)
        return Response.json(response, { status: 401 })

    // Generate JWT token and add it to the response
    // response.id_token = sign(response, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })

    return Response.json(response, { status: 200 })
}