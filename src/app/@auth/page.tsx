"use client"

import useAuth from "@/hooks/useAuth"
import { deleteUser } from "firebase/auth"
import { useState } from "react"

export default function Page() {
    const [error, setError] = useState("")
    const { auth } = useAuth();

    const deleteAccount = async () => {
        setError("")
        const user = auth.currentUser
        if (user) {
            await deleteUser(user)
                .then(() => {
                    window.location.reload()
                })
                .catch((error) => { console.log(error) })
        }
    }

    return (
        <div id="auth">
            <h1>
                If you are seeing this you have successfully signed up. Refresh the page as much as you would like it will always
                default to showing you the render of the wrong page before showing the correct one. The design pattern used in the example where
                we have clientside dependencies is not an uncommon one as far as I am concerned. There will be many instances where
                similar behaviors will be seen due to the rendering of the client side code components being done on the server. This is
                not the correct approach I would argue.
            </h1>

            <h1>Delete your account with the button bellow. No record of it will be kept</h1>
            <button onClick={() => deleteAccount()}>Delete Account</button>
            {
                error ?
                    <>
                        <h1>
                            If you are seeing this. There has been some sort of error deleting you account. If this is the case please check your connection.
                            If it persists please contact me on reddit. I will delete it manually. But i can assure you all accounts will finish by being deleted.
                            You can find the error message below for more context.
                        </h1>
                        <p className="warning">{error}</p>
                    </>
                    :
                    <>
                    </>
            }
            <h1></h1>
        </div>
    )
}