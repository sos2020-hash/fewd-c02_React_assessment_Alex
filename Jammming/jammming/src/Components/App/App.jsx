import React,{useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [searchResults, setsearchResults] = useState([{
    id:'',
    name:'',
    artist:'',
    album:'',
  }]);

  const [playlistName, setPlaylistName] = useState('');

  const [playlistTracks, setPlaylistTracks] = useState([{
    id:'',
    name:'',
    artist:'',
    album:'',
  }]);

  const addTrack = (newTrack) => {
    if (playlistTracks.find(
      track => track.id === newTrack.id)) {
        return;
      }
      setPlaylistTracks([...playlistTracks, newTrack])
    }

  const removeTrack = (deleteTrack) => {
    const renewPlaylist = playlistTracks.filter(track.id !== deleteTrack.id)
    setPlaylistTracks(renewPlaylist)
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const tracksURIs = playlistTracks.map((track) => track.uri)
    return tracksURIs
  }

  const search = (searchTerm) => {
    console.log(searchTerm);
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
      onAdd={addTrack}
      onRemove={removeTrack}
      onNameChange={updatePlaylistName}
      onSave={savePlaylist}
      />
    </div>
  </div>
</div>
  );
}

export default App;
