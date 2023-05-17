'use server'
import { redirect } from 'next/navigation'
import * as repo from '../api/users/user-repo'

export const createUser = async (formData) => {
    const { email, password, name } = Object.fromEntries(formData.entries())
    const user = { email, password, name }
    await repo.createUser(user)
    redirect('/login')
}

export const getUser = async (formData) => {

}