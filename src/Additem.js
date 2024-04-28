import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additem = ({New,setNew,sub}) => {

  const ref=useRef()

  return (
    <form className='addform' onSubmit={sub}>
        <label className='adds' htmlFor="addItem">INPUT : </label>
        <input className='addss' 
            placeholder='Enter the task'
            id="addItem" 
            type="text"
            ref={ref}
            required
            value={New} 
            onChange={(e)=>{
                setNew(e.target.value)
            }}
        />
        <button type='submit' onClick={(e)=>ref.current.focus()}> <FaPlus/>  </button>
    </form>
  )
}

export default Additem
