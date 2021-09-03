import React from 'react'

const Track = ({track, onAdd, onRemove, isRemoval}) => {
    const renderAction = (isRemoval) => {
      if(isRemoval) {
        return (
            <button 
            className="Track-action" 
            onClick={()=> onAdd}
            >+</button>
        )
      } else {
        return (
          <button 
          className="Track-action"
          onClick={()=> onRemove}
          >-</button>
        )
      }
    }
    return (
          <div className="Track">
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album} </p>
            </div>
            {renderAction(isRemoval)}
          </div>
    )
}

export default Track
