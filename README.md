# Himalaya AI Research Lab (HARL) – Digital Address / Landing Page

Production-ready MERN stack landing page for Himalaya AI Research Lab (HARL), following Clean Architecture with TypeScript and constructor-based dependency injection.

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, TypeScript (deployable to Vercel)
- **Backend**: Node.js, Express, TypeScript (deployable to Render or Railway)
- **Database**: MongoDB Atlas (Mongoose ODM)
- **Shared Types**: Root `shared/` folder consumed by both frontend and backend

## Features

- **Hero**: HARL name, tagline, mission statement
- **Mission**: Full mission paragraph about open-source AI research for Nepali language and culture
- **Projects**: Featured project `HimalayaAI/nepali-corpus` with description, stars, and GitHub link
- **Links**: GitHub, X, HuggingFace profile links
- **Contact**: Contact form (name, email, message) stored in MongoDB
- **Architecture**: Clean Architecture with four layers and central DI container

## Monorepo Structure

```text
harl/
├── README.md
├── shared/
│   └── types.ts
├── frontend/
│   ├── src/
│   └── ...
└── backend/
    ├── src/
    └── ...
```

The full structure and all important source files are included in this repository.

## Environment Variables

### Frontend (`frontend/.env`)

```env
VITE_API_BASE_URL=http://localhost:4000
```

### Backend (`backend/.env`)

```env
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/harl
CORS_ORIGIN=http://localhost:5173
```

## Setup

From the repository root:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### Running in Development

```bash
# Backend
cd backend
npm run dev

# Frontend (in another terminal)
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build & Deploy

### Frontend (Vercel)

- **Root directory**: `frontend`
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Environment variables**:
  - `VITE_API_BASE_URL`: URL of the deployed backend API

### Backend (Render / Railway)

- **Root directory**: `backend`
- **Build command**: `npm run build`
- **Start command**: `npm run start`
- **Environment variables**:
  - `PORT`
  - `NODE_ENV`
  - `MONGODB_URI`
  - `CORS_ORIGIN`

## Architecture Overview

- **Presentation**:
  - Backend: Express controllers and routers
  - Frontend: React components, hooks, and feature modules
- **Application**:
  - Use cases like `GetLabProfileUseCase`, `GetProjectsUseCase`, and `CreateContactUseCase`
- **Domain**:
  - Entities and repository interfaces, independent of infrastructure
- **Infrastructure**:
  - Mongoose models, MongoDB connection, DI container

Constructor-based DI is defined in `backend/src/infrastructure/container.ts`, which acts as the single source of truth. No service imports another service directly; dependencies are injected.

## TypeScript & Quality

- `strict: true` enabled in both frontend and backend `tsconfig.json`
- No usage of `any`; `unknown` with proper type narrowing is preferred
- All API responses use a generic `ApiResponse<T>` envelope
- React components use `React.FC` or explicit props interfaces
- Express handlers are typed with `Request` and `Response`
- Mobile-first responsive design with Tailwind CSS
- CORS origin is configured via environment variable for custom domains

## Contact Data

Contact form submissions are persisted via:

1. **Presentation**: `/api/contact` POST controller
2. **Application**: `CreateContactUseCase`
3. **Domain**: `ContactRepository` interface
4. **Infrastructure**: `MongoContactRepository` using Mongoose

