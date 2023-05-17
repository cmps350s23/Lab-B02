'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Register() {

    // const handleSubmit = async (formData) => registerUser(formData)

    const router = useRouter()
    async function handleSubmit(event) {


        event.preventDefault()
        const user = {
            name: event.currentTarget.name.value,
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value
        }
        // Send email and password to your API route

        console.log('email: ', user.email);
        console.log('password: ', user.password);

        const response = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })

        const data = await response.json()
        if (data.error)
            alert(data.error);
        else
            alert('User registered successfully');

        router.push('/login');

    }

    return (
        <div className={styles.container}>
            <h2 className={styles.registerTitle}>Register</h2>

            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="me@example.com"
                        name="email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                    />
                </div>

                <button className={[styles.btn, styles.btnHtmlForm]} type="submit" value="Log in">
                    Register
                </button>
            </form>
        </div>
    )
}
