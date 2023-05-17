import { getAccounts, addAccount } from "./accounts-repo"
import { verify } from 'jsonwebtoken'

export async function GET(request) {
    try {


        const authorization = request.headers.get('Authorization')
        if (!authorization) return Response.json({ error: "You need to add the Token" }, { status: 401 })

        //throws error
        verify(authorization, process.env.JWT_SECRET_KEY)

        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type')

        const accounts = await getAccounts(type)

        return Response.json(accounts)
    } catch (error) {
        return Response.json({ error }, { status: 401 })
    }
}

export async function POST(request) {
    const account = await request.json()
    const newAccount = await addAccount(account)
    return Response.json(newAccount)

}