import React from 'react'
import { FaTrash } from "react-icons/fa";

const Higherfun = ({items,changed,del2}) => {
  return (
    <main>
      {(items.length)?(
          <ul>
          {
              items.map(
                  (item) => (
                      <li className='styled' key={item.id}>
                          <input className='check' type="checkbox" checked={item.checked} onChange={()=>changed(item.id)} />
                          <label 
                              style={(item.checked)?{textDecoration:'line-through'}:null}
                              onDoubleClick={
                              ()=>changed(item.id)
                          }>{item.name}</label>
                         <FaTrash className='del' onClick={() => del2(item.id)} role='button' tabIndex='0'/> 
                      </li>
                  )
              )
          }
        </ul>
      ):(
        <p className='none'>Yout list is empty</p>
      )}
      
    </main>
  )
}

export default Higherfun
