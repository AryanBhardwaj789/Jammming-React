import React, { useState } from "react";
import styles from './App.module.css';
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App () {
    const [searchResults, setSearchResults] = useState([
    {
      name: "example track name 1",
      artist: "example track artist 1",
      album: "example track album 1",
      id: 1,
    },
    {
      name: "example track name 2",
      artist: "example track artist 2",
      album: "example track album 2",
      id: 2,
    }]);
    const [playlistName, setPlaylistName] = useState("Example Playlist Name");
    const [playlistTracks, setPlaylistTracks] = useState([
      {
        name: "Example Playlist Name 1",
        artist: "Example Playlist Artist 1",
        album: "Example Playlist Album 1",
        id: 1,
      },
      {
        name: "Example Playlist Name 2",
        artist: "Example Playlist Artist 2",
        album: "Example Playlist Album 2",
        id: 2,
      }
    ])
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}

          <div className={styles['App-playlist']}>
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults userSearchResult={searchResults} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
          </div>
        </div>
      </div>
        );
}

export default App;