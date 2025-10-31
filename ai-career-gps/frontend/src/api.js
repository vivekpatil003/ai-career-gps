import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:4000/api',
  timeout: 20000
})

export async function createTwin(profile) {
  const resp = await api.post('/twin', { profile })
  return resp.data
}

export async function simulateTask(twinId, taskParams) {
  const resp = await api.post('/simulate', { twinId, taskParams })
  return resp.data
}

export async function getRoadmap(profile, marketContext) {
  const resp = await api.post('/roadmap', { profile, marketContext })
  return resp.data
}

export default api
