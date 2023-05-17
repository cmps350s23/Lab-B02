import { getAccount, updateAccount, deleteAccount } from "../accounts-repo";

export async function GET(request, { params }) {
    const { id } = params;
    const account = await getAccount(id)
    return Response.json(account, { status: 200 });
}

export async function PUT(request, { params }) {
    const account = await request.json()
    const accountNo = params.id;
    const updatedAccount = await updateAccount(account, accountNo)
    return Response.json(updatedAccount)
}

export async function DELETE(request, { params }) {
    const { id } = params;
    const account = await deleteAccount(id)
    return Response.json(account, { status: 200 });
}