import React from 'react'

const YourInfo = () => {
  return (
    <section className='flex flex-col gap-4 h-full w-full sm:justify-between'>
      <div className='flex flex-col gap-3 sm:gap-10' >
        <h1 className='text-3xl font-bold' style={{color:'var(--marineBlue)'}} >Personal info</h1>
        <p className='font-medium' style={{color:'var(--coolGray)'}}>Please provide your name, email address, and phone number.</p>
      </div>

      <div className='flex flex-col justify-between sm:gap-4 sm:justify-center h-full'>
        <div className='flex flex-col'>
          <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='name'>Name</label>
          <input placeholder='e.g Levi Ackerman' className='placeholder:font-medium border-2 h-10 px-2 rounded-md' id='name' type='text' />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='email'>Email Address</label>
          <input placeholder='e.g captainlevi@paradis.com' className='placeholder:font-medium border-2 h-10 px-2 rounded-md' id='email' type='email' />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='phone'>Phone Number</label>
          <input placeholder='e.g +1 234 567 890' className='placeholder:font-medium border-2 h-10 px-2 rounded-md' id='phone' type='tel' />
        </div>
      </div>
    </section>

  )
}

export {YourInfo}