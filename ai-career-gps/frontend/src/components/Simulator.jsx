import React, { useState } from 'react'

export default function Simulator({ onSimulate }){
  const [task, setTask] = useState('debugging')
  const [difficulty, setDifficulty] = useState('medium')

  function submit(e){
    e.preventDefault()
    onSimulate({ task, difficulty })
  }

  return (
    <form onSubmit={submit} className="mt-4 space-y-3">
      <h4 className="neon font-medium">Career Stress-Test</h4>
      <select value={task} onChange={e=>setTask(e.target.value)} className="w-full p-2 rounded-md bg-[#07070a] border border-[#121217]">
        <option value="debugging">Debugging scenario</option>
        <option value="team-conflict">Team conflict</option>
        <option value="diagnosis">Patient diagnosis</option>
      </select>
      <select value={difficulty} onChange={e=>setDifficulty(e.target.value)} className="w-full p-2 rounded-md bg-[#07070a] border border-[#121217]">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button className="w-full py-2 rounded-md bg-gradient-to-r from-neon-green to-neon-yellow">Run Simulation</button>
    </form>
  )
}
