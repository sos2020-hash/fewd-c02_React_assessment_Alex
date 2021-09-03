import React from 'react'
import TrackList from '../TrackList/TrackList'
const Playlist = ({playlistTracks, playlistName, onAdd, onRemove, onNameChange, onSave}) => {
    const defaultValue = 'New Playlist';
    const handleNameChange = ({target}) => {
        onNameChange(target.value)
    }
    return (
        <div className="Playlist">
            <input 
            value={defaultValue}
            onChange={handleNameChange}
            />
            <TrackList 
            playlistTracks={playlistTracks} 
            onAdd={onAdd} 
            onRemove={onRemove}
            />
            <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist
