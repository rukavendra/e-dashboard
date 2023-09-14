import React from 'react'
import { Link  } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/' >Workout Partner</Link>
        </div>
    </header>
  )
}

export default NavBar