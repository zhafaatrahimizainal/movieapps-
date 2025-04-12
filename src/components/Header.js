import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const navigation = [
        {
            label: "TV Shows",
            href: 'tv'
        },
        {
            label: "Movies",
            href: 'movie'
        }
    ]

  return (
    <header className=' fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 flex'>
        <div className=' w-fit mx-5 px-2 flex items-center h-full'>
            <img
                src={logo}
                alt='Logo'
                width={40}
            />
        </div>

        <nav className=' hidden lg:flex w-fit items-center gap-1 '>
            {
                navigation.map((nav, index) => {
                    return(
                        <div className=''>
                            <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && 'text-neutral-100'}`}>
                                {nav.label}
                            </NavLink>
                        </div>
                    )
                })
            }
        </nav>

    </header>
  )
}

export default Header