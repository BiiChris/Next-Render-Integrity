"use client"

import useAuth from "@/hooks/useAuth"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import React, { useState } from "react"

export default function Page() {
    const [error, setError] = useState("")
    const { auth } = useAuth()

    async function signup() {
        setError("")
        await signInWithPopup(auth, new GoogleAuthProvider())
            .then(() => window.location.reload())
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div id="noauth">
            <h1>
                You are currently unauthenticated. Sign up to see what happens on subsequent refreshes or pageloads.
                This signup is simply firebase auth using google sign in.
            </h1>
            <button onClick={()=> signup()}>Sign Up</button>
            <h1>{error}</h1>
        </div>
    )
}