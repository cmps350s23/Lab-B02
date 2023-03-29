export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const accounts = [
        {
            "accountNo": 2002,
            "acctType": "Saving",
            "balance": 8000,
            "minimumBalance": 1000
        },
        {
            "accountNo": 1102,
            "acctType": "Current",
            "balance": 500,
            "monthlyFee": 15
        }
    ]
    return Response.json(accounts)
}
