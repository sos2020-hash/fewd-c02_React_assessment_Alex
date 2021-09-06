import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'
const Playlist = ({playlistTracks, playlistName,  onNameChange, onSave, onRemove}) => {
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
            isRemoval={true} 
            tracks={playlistTracks} 
            onRemove={onRemove}
            />
            <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist
