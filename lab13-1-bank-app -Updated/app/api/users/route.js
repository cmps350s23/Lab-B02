import { createUser } from "./user-repo"

export async function POST(request) {
    const user = await request.json()
    const response = await createUser(user)
    return Response.json(response, { status: 201 })
}


    // created status code 201
    // delete status code 204
    // updated status code 200
    // bad request status code 400
    // unauthorized status code 401
    // forbidden status code 403
    // not found status code 404
    // internal server error status code 500
    // service unavailable status code 503
    // gateway timeout status code 504
