import React from 'react'

const SearchBar = ({onSearch}) => {
    const handleTermChange = (event) => {
        onSearch(event.target.value)
    }
    return (
        <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>      
    )
}

export default SearchBar
