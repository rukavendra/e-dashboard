import React from 'react'
import { Link  } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='shadow max-w-full font-extrabold bg-white text-3xl'>
        <div className='flex items-center justify-between p-4'>
            <Link to='/' >Workout Partner</Link>
        </div>
    </header>
  )
}

export default NavBar