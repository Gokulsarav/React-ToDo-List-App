import React from 'react'
import { useState } from 'react'

const Content = () => {
    const [name,setname]= useState("tell your name")
    function def(){
        var names=['Gokul','Jeevi','Latha','Saravanan']
        var num= Math.floor(Math.random()*4)
        return setname(names[num])
    }
    // const [count,setCount]= useState(99)
    // function num() {
    //   setCount(count-1)
    //   console.log(setCount)
    // }

  return (
    <main>
      <h1>Hello {name}</h1>
      <button onClick={def} >Click</button>
    <br />
    {/* <button>-</button><br />
    <span> {count} </span><br />
    <button onClick={num}>+</button> */}
    </main>
  )
}

export default Content
