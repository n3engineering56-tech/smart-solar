# smart-solar — CRM foundation

This repository contains the Smart Solar project. This branch contains a basic CRM foundation: a minimal Express/Mongo backend and a Vite/React frontend to demonstrate listing clients and basic CRUD endpoints.

Quickstart (local)
1. Start Mongo (option A: Docker)
   docker-compose up -d

2. Backend
   cd backend
   cp .env.example .env   # edit if needed
   npm install
   npm run dev

3. Frontend
   cd frontend
   cp .env.example .env
   npm install
   npm run dev

API
- GET /api/clients        — list clients
- POST /api/clients       — create client
- GET /api/clients/:id    — read one
- PUT /api/clients/:id    — update
- DELETE /api/clients/:id — delete

Notes
- The backend expects MONGO_URI in env; .env.example uses docker-compose service name.
- This is a minimal foundation; add authentication, validation, and tests as next steps.
