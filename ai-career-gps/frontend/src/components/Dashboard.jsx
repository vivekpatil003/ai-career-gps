import React from 'react'

export default function Dashboard({ profile, twin, roadmap }){
  return (
    <div>
      <h2 className="text-lg font-semibold neon">Welcome, {profile?.name}</h2>
      <p className="text-xs text-gray-400 mt-2">{profile?.skills?.join(', ')}</p>

      <div className="mt-4 p-3 rounded-md bg-[#05050a] border border-[#101015]">
        <div className="flex justify-between">
          <div>
            <div className="text-xs text-gray-400">Career Score</div>
            <div className="font-bold neon text-2xl">{twin?.score || 62}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">Badges</div>
            <div className="mt-1">🔰 Beginner • 💻 Project-ready</div>
          </div>
        </div>
      </div>
    </div>
  )
}
