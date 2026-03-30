@echo off
echo Starting HimalayaAI Backend and Frontend...

:: Create backend .env if it doesn't exist
if not exist backend\.env (
    echo Creating default backend .env...
    (
    echo PORT=4000
    echo DATABASE_URL="file:./dev.db"
    echo CORS_ORIGIN=http://localhost:5173
    echo NODE_ENV=development
    ) > backend\.env
)

:: Create frontend .env if it doesn't exist
if not exist frontend\.env (
    echo Creating default frontend .env...
    echo VITE_API_BASE_URL=http://localhost:4000/api > frontend\.env
)

echo.
echo Launching Backend (Terminal 1)...
start "HimalayaAI Backend" cmd /k "cd backend && npm.cmd run dev"

echo Launching Frontend (Terminal 2)...
start "HimalayaAI Frontend" cmd /k "cd frontend && npm.cmd run dev"

echo.
echo Done! Both servers should be starting in separate windows.
echo Frontend: http://localhost:5173
echo Backend Health Check: http://localhost:4000/health
pause
