import prisma from "@/app/libs/prisma";
export const getOwners = async () => await prisma.owner.findMany();

export async function getOwnerReport(ownerId) {
    const report = await prisma.owner.findMany({
        where: { ownerId: query.ownerId },
        include: {
            accounts: {
                include: {
                    transactions: true
                }
            }
        }
    })
    console.log(JSON.stringify(report, null, 2));
    return report
}