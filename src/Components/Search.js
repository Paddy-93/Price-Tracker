import React, {useState} from 'react'
import { StyledSearch } from './styled';

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    
    const handleSubmit = () => {
        console.log(searchInput)
    }
    const handleSearchInputChange = (ev) => {
        setSearchInput(ev.target.value)
    }
  return (
    <StyledSearch>
        <input id="search-input" onChange={handleSearchInputChange} type="input" value={searchInput}></input>
        <div><button onClick={handleSubmit}>Search</button></div>
        
    </StyledSearch>
  )
}

export default Search