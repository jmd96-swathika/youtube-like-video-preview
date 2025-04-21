# About

This React frontend is for the YouTube-like video preview application. It fetches video data from the backend and displays a list of interactive video cards.

## Requirements

1. Node.js & npm
2. React 17+
3. TypeScript

## Features

1. Responsive grid layout
2. Interactive mode: videos play on hover and pause when leaves
3. Static mode: shows blurred thumbnail
4. Search input - triggers when 3 characters are typed
5. Mute and Unmute the video

## Setup Instructions

1. Create React App
    >
        npx create-react-app youtube_video_preview --template typescript
        cd youtube_video_preview

2. Set Environment Variable
    > Create .env in project root:

        REACT_APP_API_BASE_URL=http://localhost:8000

3. Use Environment Variable in API Calls
    >
        const BASE_URL = process.env.REACT_APP_API_BASE_URL;

4. Start the Development Server
    >
        npm install
        npm start

## How to Run

>
    git clone https://github.com/jmd96-swathika/youtube-like-video-preview.git
    cd youtube-like-video-preview
    npm install
    Add .env file
        REACT_APP_API_BASE_URL=http://localhost:8000
    npm start

This runs at: http://localhost:3000
