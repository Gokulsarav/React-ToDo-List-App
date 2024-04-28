import React from 'react'
const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer> {length} {length === 1? "List":"Lists"} is avaliable 
    Copyright &copy; {year.getFullYear()}</footer>
  )
}

export default Footer
    
