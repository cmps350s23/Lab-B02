import { addTransaction } from "./trans-repo";

export async function POST(request, { params }) {
    const { id } = params
    const transaction = await request.json()
    const response = await addTransaction(transaction, id)
    return Response.json(response)
}