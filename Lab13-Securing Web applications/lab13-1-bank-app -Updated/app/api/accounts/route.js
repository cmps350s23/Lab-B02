import { getAccounts, addAccount } from "./accounts-repo"

export async function GET(request) {
    try {
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