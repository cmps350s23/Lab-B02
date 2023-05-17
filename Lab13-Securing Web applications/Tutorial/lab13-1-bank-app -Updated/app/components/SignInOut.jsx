import { signOut, signIn } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function SignInOut() {
    const { data: session } = useSession()

    if (session) {
        return (
            <button onClick={signOut} className="btn btn-secondary">
                <span href="#" class="badge bg-primary">Welcome {session.user.name.toUpperCase()}</span>
                Sign Out
            </button>
        )
    }

    return (
        <button onClick={signIn}>Sign In</button>
    )

}
