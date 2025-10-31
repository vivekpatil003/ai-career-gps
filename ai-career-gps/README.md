# AI Career GPS - Prototype (Hackathon)

This package contains a frontend React (Vite + Tailwind) app and a backend Express server stub, plus a Cloud Functions template for Vertex AI integration.

Location: /mnt/data/ai-career-gps/

## What is included
- frontend/ : React + Tailwind dark-neon themed prototype
- backend/  : Express server with API stubs: /api/twin, /api/simulate, /api/roadmap
- cloud_functions/ : Node template demonstrating how to call Vertex AI (template)
- architecture_diagram.png : slide-ready PNG of system architecture
- ai-career-gps.zip : zip archive of the entire project (created automatically)

## Quick start (local)
1. Frontend
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
2. Backend
   ```bash
   cd backend
   npm install
   node index.js
   ```
3. Point `VITE_API_BASE` to http://localhost:4000/api in a `.env` file in the frontend folder.
4. For Vertex AI integration, deploy the `cloud_functions` folder to Cloud Functions or Cloud Run and set up authentication with a service account that has Vertex AI permissions.

## Files of interest
- frontend/src/* : React components and styles
- backend/index.js : Simple stub responses to power the demo
- cloud_functions/index.js : Template to implement Vertex AI calls in production

---
