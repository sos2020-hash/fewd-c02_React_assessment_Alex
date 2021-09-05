import React,{useState} from 'react'
import './Search.css'
const SearchBar = ({onSearch}) => {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value)
    }

    const search = () => {
        onSearch(term)
    }
    return (
        <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>      
    )
}

export default SearchBar
