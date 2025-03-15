## YouTube Web App

A responsive video streaming web application developed using YouTube Live APIs to provide seamless live video playback. The application features a dynamic search bar with debouncing and caching, as well as simulated live chat functionality using API pooling. The app uses Redux Toolkit for global state management and React Router for navigation.

## Features
  
**Live Video Streaming**: 
  - Seamless integration with YouTube Live API for live video playback.

**Watch Page**:
  - When clicking on any video, users are redirected to a detailed watch page.
  - Displays video description, views count, like count, and top comments for each video.

**Dynamic Search Bar**: 
  - Supports real-time searching with debouncing to minimize unnecessary API calls.
  - Implements caching to improve search performance and reduce redundant network requests.
  
**Simulated Live Chat**:
  - Implements simulated live chat functionality by pooling APIs at regular intervals, mimicking real-time interactions.
  
**Global State Management**: 
  - Uses Redux Toolkit to manage global state efficiently.
  
**Routing**: 
  - Implemented navigation between different pages using React Router for a seamless user experience.

## Tech Stack

- JavaScript
- ReactJS
- Redux Toolkit
- React Router
- YouTube Live APIs
  
## Installation

To run this project locally, follow these steps:

   ```
   $ git clone https://github.com/ShivamT16/youtube-app.git
   $ cd youtube-app
   $ npm install
   $ npm start