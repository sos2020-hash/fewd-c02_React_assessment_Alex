import React from 'react'
import './Track.css'

const Track = ({track, onAdd, onRemove, isRemoval}) => {

    const renderAction = () => {
      if(isRemoval) {
        return (
          <button className="Track-action"onClick={() => onRemove}>-</button>
        )
      } 
      return <button className="Track-action" onClick={() => onAdd}>+</button>
    }
    return (
          <div className="Track">
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album} </p>
            </div>
            {renderAction()}
          </div>
    )
}

export default Track
