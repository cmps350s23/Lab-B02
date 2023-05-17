import prisma from "@/app/libs/prisma";
import { hash, compare } from "bcrypt"

export const createUser = async (user) => {
    try {
        // before adding the user we need to hash the password
        // add the bcrypt hash here

        user.password = await hash(user.password, 10)

        const newUser = await prisma.user.create({
            data: user
        })

        delete newUser.password
        return newUser
    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

export const getUser = async (email, password) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email: email }
        })
        if (!user) return { error: "User does not exist" }

        //add the bcrypt compare here

        const isMatch = compare(user.password, password)

        if (!isMatch) return { error: "Invalid password" }

        // delete the password from the user object before returning it

        delete user.password
        return user
    } catch (error) {
        return { error: error.message }
    }
}