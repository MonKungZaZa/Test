

import { Search } from 'lucide-react'
import { useState } from 'react'
// import {searchResults , loading , searchQuery ,search } from '../hooks/useSeach'

const SearchBar = ({ onSearch })=>{
    const [ query , setQuery ] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSearch(query);
    }

    return (
        <form onSubmit={handleSubmit}  className='search-bar'>
                <div className='Search-input-group'>
                    <input
                    type="text"
                    value={query}
                    onChange={  (e)=>setQuery(e.target.value) }
                    placeholder='ค้นหาสินค้า'
                    className=' search-input'
                    />
                    <button type="submit" className='search-button'>
                        <Search size={20}/>
                    </button>
                </div>
        </form>
    )
}

export default SearchBar ;
