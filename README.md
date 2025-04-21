# About

This React frontend is for the YouTube-like video preview application. It fetches video data from the backend and displays a list of interactive video cards.

## Requirements

Node.js & npm
React 17+
TypeScript

## Features

Responsive grid layout
Interactive mode: videos play on hover and pause when leaves
Static mode: shows blurred thumbnail
Search input - triggers when 3 characters are typed
Mute and Unmute the video

## Setup Instructions

1. Create React App
    npx create-react-app youtube_video_preview --template typescript
    cd youtube_video_preview

2. Set Environment Variable
    Create .env in project root:
        REACT_APP_API_BASE_URL=http://localhost:8000

3. Use Environment Variable in API Calls
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

4. Start the Development Server
    npm install
    npm start

## How to Run

git clone <url>
cd youtube_video_preview
npm install
npm start

This runs at: http://localhost:3000