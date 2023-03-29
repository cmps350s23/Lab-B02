export async function GET(request, { params }) {
    const { id } = params;
    // const accounts = [
    //     {
    //         "accountNo": 2002,
    //         "acctType": "Saving",
    //         "balance": 8000,
    //         "minimumBalance": 1000
    //     },
    //     {
    //         "accountNo": 1102,
    //         "acctType": "Current",
    //         "balance": 500,
    //         "monthlyFee": 15
    //     }
    // ]

    const accounts = await fs.readJSON('./data/accounts.json')
    fs.writeJSON('./data/accounts.json', account)


    const account = accounts.find(account => account.accountNo === parseInt(id));
    return Response.json(account);
}