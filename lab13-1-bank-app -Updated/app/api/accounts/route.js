import { getAccounts, addAccount } from "./accounts-repo"
import jwt from "jsonwebtoken"

export async function GET(request) {
    try {

        // const authorization = request.headers.get('Authorization')
        // if (!authorization)
        //     return Response.json({ error: "You need to provide the auth token" }, { status: 401 })

        // jwt.verify(authorization, process.env.JWT_SECRET)

        // // check if the token is valid (verify) and wrap with try catch 


        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type')

        const accounts = await getAccounts(type)

        return Response.json(accounts)
    } catch (error) {
        return Response.json({ error: "Invalid Token" }, { status: 401 })
    }
}

export async function POST(request) {
    const account = await request.json()
    const newAccount = await addAccount(account)
    return Response.json(newAccount)

}