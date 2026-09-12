@echo off
title AgriLink 🌱 (SIH26132) - Farm-to-Buyer Platform
color 0A

echo ===================================================================
echo   🌱 AgriLink - SIH2026 AI-Powered Market Intelligence Platform
echo   Smart India Hackathon Problem Statement 6132
echo ===================================================================
echo.

:: Check Node.js installation
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [WARNING] Node.js is not found in PATH!
    echo Opening AgriLink standalone client directly in your browser...
    echo.
    start "" "index.html"
    echo.
    echo Tip: Install Node.js from https://nodejs.org/ for live server telemetry.
    pause
    exit /b 0
)

echo [1/2] Building latest client bundle...
call node scripts/build_bundle.js
if %errorlevel% neq 0 (
    echo [WARNING] Bundle build completed with notices, proceeding...
)

echo.
echo [2/2] Starting AgriLink server on http://localhost:5000 ...
echo [INFO] Your default web browser will open automatically.
echo [INFO] Press Ctrl+C in this window at any time to stop the server.
echo.

node server.js

pause
