import prisma from "@/app/libs/prisma";

export async function addTransaction(transaction, accountNo) {

    transaction.amount = +transaction.amount

    try {
        const account = await prisma.account.findUnique({ where: { accountNo } })

        if (transaction.transType == 'Deposit')
            account.balance += transaction.amount;
        else
            account.balance -= transaction.amount;

        await prisma.account.update({
            where: { accountNo },
            data: account
        });



        const newTransaction = await prisma.transaction.create({
            data: transaction
        })

        return {
            message: 'transaction successful',
            newTransaction
        }

    } catch (err) {
        console.log(err);
        return {
            error: 'unable to execute the transaction successful',
            errorMessage: err.message
        }
    }
}

export async function getTransSum(accountNo, fromDate, toDate) {
    try {
        const transSum = await prisma.transaction.groupBy({
            where: {
                accountNo,
                date: {
                    gte: new Date(fromDate).toISOString(),
                    lte: new Date(toDate).toISOString()
                }
            },
            by: ['transType'],
            _sum: {
                amount: true
            }
        })
        console.log(JSON.stringify(transSum, null, 2));

        return transSum
    } catch (err) {
        console.log(err);
        return { error: err.message }
    }
}