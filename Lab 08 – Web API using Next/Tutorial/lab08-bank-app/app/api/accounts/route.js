import AccountsRepo from "./accounts-repo"
const repo = new AccountsRepo()

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const accounts = await repo.getAccounts(type)

    return Response.json(accounts)
}
