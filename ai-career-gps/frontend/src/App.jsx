import React, { useState } from 'react'
import Header from './components/Header'
import Onboarding from './components/Onboarding'
import Dashboard from './components/Dashboard'
import Simulator from './components/Simulator'
import TwinCard from './components/TwinCard'
import GPSRoadmap from './components/GPSRoadmap'
import { createTwin, simulateTask, getRoadmap } from './api'

export default function App(){
  const [profile, setProfile] = useState(null)
  const [twin, setTwin] = useState(null)
  const [simResult, setSimResult] = useState(null)
  const [roadmap, setRoadmap] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmitProfile(p){
    setProfile(p)
    setLoading(true)
    try{
      const twinResp = await createTwin(p)
      setTwin(twinResp)
      const road = await getRoadmap(p, { market: 'global' })
      setRoadmap(road)
    }catch(e){
      console.error(e)
      alert('Error creating twin — check backend')
    }finally{ setLoading(false) }
  }

  async function handleSimulate(taskParams){
    setLoading(true)
    try{
      const res = await simulateTask(twin?.id || 'demo-twin', taskParams)
      setSimResult(res)
    }catch(e){
      console.error(e)
      alert('Simulation error')
    }finally{ setLoading(false) }
  }

  return (
    <div className="min-h-screen p-6">
      <Header />
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-4 glass p-5 rounded-2xl">
          {!profile ? (
            <Onboarding onSubmit={handleSubmitProfile} loading={loading} />
          ) : (
            <Dashboard profile={profile} twin={twin} roadmap={roadmap} />
          )}
        </div>

        <div className="col-span-5 glass p-6 rounded-2xl">
          <h3 className="text-xl neon">AI Career Twin</h3>
          <TwinCard twin={twin} />
          <Simulator onSimulate={handleSimulate} />
          {simResult && (
            <div className="mt-4 p-3 bg-[#0b0b0d] rounded-md border border-[#121217]">
              <h4 className="font-semibold">Simulation Result</h4>
              <pre className="text-sm mt-2">{JSON.stringify(simResult, null, 2)}</pre>
            </div>
          )}
        </div>

        <div className="col-span-3 glass p-6 rounded-2xl">
          <GPSRoadmap roadmap={roadmap} />
        </div>
      </div>
    </div>
  )
}
