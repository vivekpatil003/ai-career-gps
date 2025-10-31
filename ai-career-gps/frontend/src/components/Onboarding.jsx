import React, { useState } from 'react'

export default function Onboarding({ onSubmit, loading }) {
  const [name, setName] = useState('')
  const [skills, setSkills] = useState('')
  const [interests, setInterests] = useState('')

  function submit(e){
    e.preventDefault()
    const profile = { name, skills: skills.split(',').map(s=>s.trim()), interests: interests.split(',').map(i=>i.trim()) }
    onSubmit(profile)
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h2 className="text-lg font-semibold neon">Get started</h2>
      <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full p-3 rounded-md bg-[#08080b] border border-[#15151a]" />
      <input value={skills} onChange={e=>setSkills(e.target.value)} placeholder="Skills (comma separated) e.g. python,react" className="w-full p-3 rounded-md bg-[#08080b] border border-[#15151a]" />
      <input value={interests} onChange={e=>setInterests(e.target.value)} placeholder="Interests e.g. healthcare,security" className="w-full p-3 rounded-md bg-[#15151a]" />
      <button disabled={loading} type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-neon-blue to-neon-pink">
        {loading ? 'Creating...' : 'Create AI Career Twin'}
      </button>
    </form>
  )
}
