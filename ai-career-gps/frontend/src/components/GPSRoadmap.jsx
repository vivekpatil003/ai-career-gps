import React from 'react'

export default function GPSRoadmap({ roadmap }){
  if(!roadmap) return <div className="text-sm text-gray-400">Roadmap will appear here after profile creation.</div>
  return (
    <div>
      <h3 className="neon font-semibold">Adaptive Roadmap</h3>
      <ol className="mt-3 space-y-3 text-sm">
        {roadmap.steps?.map((s,i)=>(
          <li key={i} className="p-3 rounded-md bg-[#07070a] border border-[#111116]">
            <div className="font-semibold">{s.title}</div>
            <div className="text-gray-300 text-xs">{s.description}</div>
            <div className="mt-2 text-xs text-gray-400">ETA: {s.eta || '3 months'}</div>
          </li>
        ))}
      </ol>
    </div>
  )
}
