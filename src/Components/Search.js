import React, {useState} from 'react'

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    
    const handleSubmit = () => {
        console.log(searchInput)
    }
    const handleSearchInputChange = (ev) => {
        setSearchInput(ev.target.value)
    }
  return (
    <div>
        <input onChange={handleSearchInputChange} type="input" value={searchInput}></input>
        <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default Search