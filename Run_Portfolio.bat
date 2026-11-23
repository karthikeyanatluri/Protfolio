@echo off
title Karthikeyan Atluri - Portfolio
echo ========================================================
echo   Starting Karthikeyan Atluri - Glass Portfolio
echo ========================================================
echo.
cd /d "%~dp0"
echo Opening browser at http://localhost:8080/ ...
start "" "http://localhost:8080/"
call npx vite --port 8080
