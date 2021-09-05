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

  const addTrack = (track) => {
    console.log('add');
    let tracks = playlistTracks
    if (tracks.find(
      savedsTrack => savedsTrack.id === track.id)) {
        return;
      }
      setPlaylistTracks([...playlistTracks, track])
    }

  const removeTrack = (deleteTrack) => {
    const renewPlaylist = playlistTracks.filter(track=> track.id !== deleteTrack.id)
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
      />
      <Playlist 
      playlistName={playlistName} 
      playlistTracks={playlistTracks}
      onAdd={() => addTrack}
      onRemove={() => removeTrack}
      onNameChange={updatePlaylistName}
      onSave={savePlaylist}
      />
    </div>
  </div>
</div>
  );
}

export default App;
