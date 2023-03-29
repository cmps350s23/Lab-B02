import AccountsRepo from "../accounts-repo";

const repo = new AccountsRepo();

export async function GET(request, { params }) {
    const { id } = params;
    const account = await repo.getAccount(id)
    return Response.json(account, { status: 200 });
}