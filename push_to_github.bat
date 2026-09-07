@echo off
title Push KisanTrust to GitHub
color 0A

echo ========================================================
echo        KISAN TRUST - PUSH TO GITHUB REPOSITORY
echo ========================================================
echo.

cd /d "%~dp0"

set "PATH=C:\Program Files\Git\cmd;C:\Users\SHASHANK\AppData\Local\Programs\Git\cmd;C:\Users\SHASHANK\AppData\Local\Programs\Git\mingw64\bin;%PATH%"

echo Checking Git status...
git status -s
echo.
echo Pushing commits to origin main (https://github.com/OgDaDDy981/kisantrust.git) ...
echo.
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo  [SUCCESS] All latest code is successfully pushed!
    echo  Repository: https://github.com/OgDaDDy981/kisantrust
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo  [NOTICE] If a browser or login prompt appeared,
    echo  please sign in with your GitHub account to authorize.
    echo ========================================================
)

echo.
echo Press any key to close this window...
pause >nul
