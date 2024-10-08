# Jamming - Spotify Playlist Manager

Jamming is a React-based web application that integrates with the Spotify API. It allows users to search for songs, create playlists, and save those playlists directly to their Spotify account.

## Live Demo
Check out the live demo: [jammmify.vercel.app](https://jammmify.vercel.app/)

## Features

- Search for songs by artist, album, or track name using the Spotify API.
- Create a custom playlist by adding and removing tracks.
- Save the playlist directly to your Spotify account.
- Real-time search results based on Spotify's extensive music catalog.
- User-friendly interface with easy playlist management.

## Technologies Used

- React.js
- Spotify API
- OAuth (for user authentication)
- CSS (for styling)
- Vercel (for deployment)

## Getting Started

### Prerequisites

To run this project locally, you'll need to have [Node.js](https://nodejs.org/) installed.

You will also need to register your application with [Spotify Developer](https://developer.spotify.com/) to get a `clientId` and `clientSecret`.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AryanBhardwaj789/Jammming-React.git

2. Navigate into the project directory:

   ```bash
   cd jamming

3. Install the dependencies:

   ```bash
   npm install

4. Set up Spotify API credentials:
    - Create a .env file in the root directory.
    - Add your clientId and redirectUri from Spotify:
    ```bash
    REACT_APP_SPOTIFY_CLIENT_ID=yourSpotifyClientId
    REACT_APP_REDIRECT_URI=http://localhost:3000/

5. Start the development server:
   
   ```bash
   npm start

The app should now be running on http://localhost:3000

## Usage
- Search for songs by artist, album, or track name in the search bar.
- Click the "+" button to add a song to your playlist.
- Remove tracks by clicking the "-" button.
- Click "Save to Spotify" to save the playlist directly to your Spotify account.