const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// Demo: create twin
app.post('/api/twin', (req, res) => {
  const { profile } = req.body
  const skills = profile?.skills || []
  const score = Math.min(85, 30 + (skills.length * 12))
  res.json({
    id: `twin_${Date.now()}`,
    title: `${profile.name || 'Student'} - ${skills[0] || 'Explorer'}`,
    summary: `AI Career Twin generated for ${profile.name}.`,
    salary_range: "₹4L - ₹18L",
    score,
    suggestions: [
      { title: 'Learn Docker', reason: 'common in industry' },
      { title: 'Build 2 projects', reason: 'Hands on' }
    ]
  })
})

// Demo: simulate task
app.post('/api/simulate', (req, res) => {
  const { twinId, taskParams } = req.body
  res.json({
    twinId,
    task: taskParams,
    outcome: {
      successRate: Math.round(Math.random()*60 + 30),
      feedback: 'You did well at problem solving; improve timeout handling.'
    }
  })
})

// Demo: roadmap
app.post('/api/roadmap', (req, res) => {
  const { profile } = req.body
  res.json({
    steps: [
      { title: 'Foundation Courses', description: 'Intro to CS + Python', eta: '2 months' },
      { title: 'Build Portfolio', description: '2 small projects + GitHub', eta: '3 months' },
      { title: 'Certifications', description: 'Optional: Cloud cert', eta: '2 months' }
    ]
  })
})

const port = process.env.PORT || 4000
app.listen(port, ()=>console.log(`Backend listening on ${port}`))
