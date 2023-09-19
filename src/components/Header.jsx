import React from 'react'
import logo from '../assets/troll_face.png'

const Header = () => {
  return (
    <header className='header'>
        <img className='header-img' src={logo} alt="troll face img" />
        <h2 className='header-title'>Meme Generator</h2>
        <h4 className='header-project'>React Course - Project 3</h4>
    </header>
  )
}

export default Header