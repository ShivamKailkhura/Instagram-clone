import React from 'react'
import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div key={profile.id} className="flex items-center justify-between">
          <img
            className="mt-1 h-16 w-16 rounded-full border p-[2px]"
            src={profile.avatar}
            alt=""
          />
          <div className="flex-1 p-2">
            <p className="truncate text-sm font-bold">{profile.username}</p>
            <p className="text-xs font-semibold">
              <span className="text-gray-400">Works at:</span>{' '}
              {profile.company.name}
            </p>
          </div>
          <div className="navBtn2 flex h-3 items-center rounded-3xl border bg-black p-5">
            <button className="text-xs font-bold text-blue-500">Follow</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
