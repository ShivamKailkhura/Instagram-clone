import React from 'react'
import { signOut, useSession } from 'next-auth/react'

function MiniProfile() {
  const { data: session } = useSession()
  return (
    <div className="flex items-center p-2">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image}
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to the Instagram</h3>
      </div>
      <button onClick={signOut} className="text-sm font-semibold text-red-400">
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
