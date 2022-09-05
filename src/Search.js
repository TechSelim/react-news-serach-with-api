import React from 'react'
import { useGlobalContext } from './context'


const Search = () => {
  const {query, searchQuery} = useGlobalContext();
  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault() }>
        <input type='text' value={query} onChange={(e)=>searchQuery(e.target.value)} />
      </form>
    </div>
  )
}

export default Search