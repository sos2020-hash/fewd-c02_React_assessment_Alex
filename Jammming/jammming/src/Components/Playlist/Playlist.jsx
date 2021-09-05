import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'
const Playlist = ({playlistTracks, playlistName, onAdd, onRemove, onNameChange, onSave}) => {
    const handleNameChange = ({target}) => {
        onNameChange(target.value)
    }
    return (
        
        <div className="Playlist">
            <input 
            defaultValue={'New Playlist'}
            onChange={handleNameChange}
            />
            <TrackList 
            tracks={playlistTracks} 
            onAdd={onAdd} 
            onRemove={onRemove}
            isRemoval={true}
            />
            <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist
