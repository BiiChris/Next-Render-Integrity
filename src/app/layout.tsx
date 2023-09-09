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
        <h1><a href="https://www.reddit.com/r/nextjs/comments/16dt00l/problematic_use_client_directive_makes_for/?utm_source=share&utm_medium=web2x&context=3">Reference to original reddit post</a></h1>
        <h1><a href="https://github.com/BiiChris/Next-Render-Integrity.git">GH REPO</a></h1>
      </footer>
    </body>
  )
}