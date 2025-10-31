import React from 'react'

export default function TwinCard({ twin }){
  if(!twin) return <div className="mt-4 text-sm text-gray-400">No twin yet — create a profile to generate one.</div>
  return (
    <div className="mt-3 p-3 rounded-md border border-[#17202a] bg-[#06060a]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg neon">{twin.title}</h3>
          <p className="text-xs text-gray-300">{twin.summary}</p>
        </div>
        <div className="text-right">
          <div className="text-sm">Salary 10yr</div>
          <div className="font-bold neon">{twin.salary_range || '₹4L - ₹20L'}</div>
        </div>
      </div>
    </div>
  )
}
