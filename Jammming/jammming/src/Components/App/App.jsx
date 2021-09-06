import React,{useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

function App() {
  const [searchResults, setsearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  Spotify.getAccessToken();

  const addTrack = (track) => {
    let tracks = playlistTracks
    if (tracks.find(
      savedTrack => savedTrack.id === track.id)) {
        return;
      }
      setPlaylistTracks([...playlistTracks, track])
    }

  const removeTrack = (deleteTrack) => {
    let tracks = playlistTracks
    const renewPlaylist = tracks.filter(track=> track.id !== deleteTrack.id)
    setPlaylistTracks(renewPlaylist)
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]) 
      });
    };



  const search = (term) => {
    Spotify.search(term).then(searchResults => {
      setsearchResults(searchResults);
    });
  }

  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar 
    onSearch={search} 
    />
    <div class="App-playlist">
      <SearchResults 
      searchResults={searchResults}
      onAdd={addTrack}
      onRemove={removeTrack}
      />
      <Playlist 
      playlistName={playlistName} 
      playlistTracks={playlistTracks}
      onNameChange={updatePlaylistName}
      onSave={savePlaylist}
      onRemove={removeTrack}
      />
    </div>
  </div>
</div>
  );
}

export default App;
