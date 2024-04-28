import React from 'react'

const SearchItem = ({Search,setSearch}) => {
  return (
    <form className='Searchform' onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text"
            id='search'
            role='searchBox'
            placeholder="Search your ToDo's"
            value={Search}
            onChange={
                (e)=>setSearch(e.target.value)
            }
        />
    </form>
  )
}

export default SearchItem
