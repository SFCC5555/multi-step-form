import React from 'react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

const navList = [{"id":1,"name":"YOUR INFO"},{"id":2,"name":"SELECT PLAN"},{"id":3,"name":"ADD-ONS"},{"id":4,"name":"SUMMARY"}]


  return (
    <nav className='navBar'>
        {navList.map(i=><NavLink to={i.name.replace(' ','-')} key={i.id} className='flex gap-4 items-center w-full hover:opacity-75 cursor-pointer'>
                            <div className='navCircle w-8 h-8 border-2 rounded-full flex items-center justify-center text-white font-medium' >{i.id}</div>
                            <div className='hidden sm:block'>
                                <p className='text-sm' style={{color:'var(--pastelBlue)'}} >STEP {i.id}</p>
                                <h3 className='text-white font-semibold'>{i.name}</h3>
                            </div>
                    </NavLink>)}

    </nav>
  )
}

export {NavBar};