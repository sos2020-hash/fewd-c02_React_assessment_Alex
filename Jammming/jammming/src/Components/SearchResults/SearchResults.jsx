import React from 'react'
import TrackList from '../TrackList/TrackList'
import './SearchResults.css'

const SearchResults = ({searchResults, onAdd, onRemove,}) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList 
            tracks={searchResults}
            onAdd={onAdd} 
            onRemove={onRemove}
            isRemoval={false}
            />
        </div>
    )
}

export default SearchResults
