import React, { useContext } from 'react';
import '../styles/NavBar.css';
import { AppContext } from '../context/AppContext';


const NavBar = () => {

  const {locationValue}=useContext(AppContext)

  const navList = [{"id":1,"name":"YOUR INFO"},{"id":2,"name":"SELECT PLAN"},{"id":3,"name":"ADD-ONS"},{"id":4,"name":"SUMMARY"}];

  return (
    <nav className='navBar'>
        {navList.map(i=><div key={i.id} className='flex gap-4 items-center w-full cursor-default'>
                            <div className={`${locationValue==='/'+i.name.replace(' ','-')?'activeNavCircle':'navCircle'} w-8 h-8 border-2 rounded-full flex items-center justify-center font-medium`} >{i.id}</div>
                            <div className='hidden sm:block'>
                                <p className='text-sm' style={{color:'var(--pastelBlue)'}} >STEP {i.id}</p>
                                <h3 className='text-white font-semibold text-sm'>{i.name}</h3>
                            </div>
                    </div>)}

    </nav>
  )
}

export {NavBar};