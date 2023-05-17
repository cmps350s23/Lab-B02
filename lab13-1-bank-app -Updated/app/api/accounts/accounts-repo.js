import prisma from "../../libs/prisma";


export async function getAccounts(type) {
    return await prisma.account.findMany({
        where: {
            ...(type && type.toLowerCase() !== "all" ? { acctType: type } : {}),
        },
        include: {
            Owner: true,
        },
    });
}

export const addAccount = async (account) =>
    await prisma.account.create({
        data: account,
    });

export const updateAccount = async (account, accountNo) => {
    console.log('before', account);
    const response = await prisma.account.update({
        where: { accountNo },
        data: account,
    });

    console.log('after update', response);
    return response
}

export const getAccount = async (accountNo) =>
    await prisma.account.findUnique({
        where: { accountNo },
    });

export const deleteAccount = async (accountNo) =>
    await prisma.account.delete({
        where: { accountNo },
    });

export const getAvgBalance = async () =>
    await prisma.account.aggregate({
        _avg: {
            balance: true,
        },
    });

export const getMinMaxBalance = async () =>
    await prisma.account.aggregate({
        _min: {
            balance: true,
        },
        _max: {
            balance: true,
        },
    });

export const getTop3Accounts = async () =>
    await prisma.account.findMany({
        orderBy: {
            balance: "desc",
        },
        take: 3,
    });
