import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const AddOns = () => {

  const {period,onlineService,largerStorage, customizableProfile} = useContext(AppContext);

  const addOnsList = [{name:"Online service",description:"Access to multiplayer games",price:"1",state:onlineService},{name:"Larger storage",description:"Extra 1TB of cloud save",price:"2",state:largerStorage},{name:"Customizable profile",description:"Custom theme on your profile",price:"2",state:customizableProfile}]

  return (
    <section className='flex flex-col gap-4 h-full w-full sm:justify-start sm:gap-10'>
      <div className='flex flex-col gap-3 sm:gap-10' >
        <h1 className='text-3xl font-bold' style={{color:'var(--marineBlue)'}} >Pick add-ons</h1>
        <p className='font-medium' style={{color:'var(--coolGray)'}}>Add-ons help enhance your gaming experience.</p>
      </div>
      <section className='flex flex-col items-center gap-3 sm:gap-2 lg:gap-3'>
      {addOnsList.map(a=><div id={a.name} onClick={a.state.change} className='w-full flex items-center justify-between px-3 py-3 sm:py-2 lg:py-3 border-2 rounded-md hover:border-purple-800 cursor-pointer'>
                              <div className='flex items-center gap-5 sm:gap-1 md:gap-5'>
                                <input checked={a.state.stateAdd} type='checkbox' />
                                <div className='flex flex-col'>
                                  <h3 className='font-bold sm:text-xs md:text-base' style={{color:'var(--marineBlue)'}}>{a.name}</h3>
                                  <p className='text-sm sm:text-xs md:text-sm' style={{color:'var(--coolGray)'}}>{a.description}</p>
                                </div>
                              </div>

                              <div className='text-sm sm:text-xs md:text-sm' style={{color:'var(--purplishBlue)'}} >+${a.price}{period.period==='Monthly'?'/mo':'0/yr'}</div>

                        </div>)}
      </section>
    </section>
  )
}

export {AddOns};