"use client"

import "./index.css"
import React from 'react'
import useAuth from '@/hooks/useAuth'

export default function RootLayout({ auth, noauth }: { auth: React.ReactNode, noauth: React.ReactNode }) {  
  const { authorized } = useAuth();

  return (
    <body>
      <main className="page">
        {
          authorized ?
          <>
            { auth }
          </>
          :
          <>
            { noauth }
          </>
        }
      </main>
      <footer>
        <h1>Reference to the original reddit post: </h1>
      </footer>
    </body>
  )
}