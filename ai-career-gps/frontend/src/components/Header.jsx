import React from 'react'
export default function Header(){
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-neon-blue to-neon-pink shadow-neon-lg">
          <span className="font-bold text-black">CT</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold neon">AI Career GPS</h1>
          <p className="text-xs text-gray-400">Simulate · Project · Navigate</p>
        </div>
      </div>
      <div>
        <button className="px-4 py-2 rounded-md glass border border-[#1b1b22]">Sign in</button>
      </div>
    </header>
  )
}
