import React from 'react'
import Track from '../Track/Track'

const TrackList = ({searchResults, onAdd, onRemove}) => {
    return (
        <div className="TrackList">
            {searchResults.map((track) => 
            <Track 
            track={track} 
            onAdd={onAdd} 
            isRemoval={false}
            onRemove={onRemove}
            />)}
        </div>
    )
}

export default TrackList
