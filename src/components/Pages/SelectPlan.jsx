import React from 'react'

const SelectPlan = () => {
  return (
    <section className='flex flex-col gap-4 h-full w-full sm:justify-between'>
    <div className='flex flex-col gap-3 sm:gap-10' >
      <h1 className='text-3xl font-bold' style={{color:'var(--marineBlue)'}} >Select your plan</h1>
      <p className='font-medium' style={{color:'var(--coolGray)'}}>You have the option of monthly or yearly billing.</p>
    </div>

    <div className='flex flex-col gap-2 h-full'>
      <div className='w-full px-3 py-1 border-2 rounded-md'>
        <span/>
        <div className='flex flex-col'>
          <h3 className='font-medium' >Arcade</h3>
          <p className='text-sm' >$9/mo</p>
          <p className='text-xs'>2 months free</p>
        </div>
      </div>

      <div className='w-full px-3 py-1 border-2 rounded-md'>
        <span />
        <div className='flex flex-col'>
          <h3>Advanced</h3>
          <p>$12/mo</p>
          <p>2 months free</p>
        </div>
      </div>

      <div className='w-full px-3 py-1 border-2 rounded-md'>
        <span />
        <div className='flex flex-col'>
          <h3>Pro</h3>
          <p>$15/mo</p>
          <p>2 months free</p>
        </div>
      </div>
    </div>

  </section>
  )
}

export{SelectPlan};