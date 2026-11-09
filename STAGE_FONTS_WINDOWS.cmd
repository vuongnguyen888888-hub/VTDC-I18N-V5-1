@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 22 is required for the font installer.
  exit /b 2
)
node scripts\stage-owner-fonts.cjs
if errorlevel 1 (
  echo Font staging BLOCKED. See README.md and docs\BEAUSANS_FONT_MANIFEST.json.
  exit /b 2
)
node scripts\verify-font-contract.cjs --assets
if errorlevel 1 exit /b 1
echo Verified: 12 owner-supplied BeauSans fonts are staged locally.
endlocal
