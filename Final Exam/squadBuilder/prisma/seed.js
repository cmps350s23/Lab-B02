import fs from 'fs-extra'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const teamsPath = path.join(process.cwd(), 'data/teams.json')
const playersPath = path.join(process.cwd(), 'data/players.json')

async function main() {
    try {
        const teams = await fs.readJSON(teamsPath)
        const players = await fs.readJSON(playersPath)

        for (const team of teams) await prisma.team.create({ data: team })
        for (const player of players) await prisma.player.create({ data: player })

    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        await prisma.$disconnect()
        process.exit(1)
    })