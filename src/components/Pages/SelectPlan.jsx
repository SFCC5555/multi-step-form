import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const SelectPlan = () => {

  const {period,plan,setLocation} = useContext(AppContext);
  setLocation(location.pathname);

  return (
    <section className='flex flex-col gap-4 h-full w-full sm:justify-start sm:gap-10'>
    <div className='flex flex-col gap-3 sm:gap-10' >
      <h1 className='text-3xl font-bold' style={{color:'var(--marineBlue)'}} >Select your plan</h1>
      <p className='font-medium' style={{color:'var(--coolGray)'}}>You have the option of monthly or yearly billing.</p>
    </div>

    <div className='flex flex-col gap-2 sm:flex-row sm:gap-3'>
      <div onClick={()=>plan.change('arcade')} className={`cursor-pointer ${plan.plan==='arcade'?'border-purple-800 bg-slate-100':'bg-white'} w-full px-3 py-3 border-2 hover:border-purple-800 rounded-md flex items-center gap-3 sm:flex-col sm:items-start sm:h-48 sm:min-w-fit sm:max-w-32 sm:justify-between sm:py-5`}>
        <span className='arcade'/>
        <div className='flex flex-col gap-1'>
          <h3 className='font-medium' style={{color:'var(--marineBlue)'}} >Arcade</h3>
          <p className='text-sm' style={{color:'var(--coolGray)'}} >$9{period.period==='Monthly'?'/mo':'0/yr'}</p>
          <p className={`text-xs ${period.period==='Monthly'&&'invisible'}`} style={{color:'var(--purplishBlue)'}}>2 months free</p>
        </div>
      </div>

      <div onClick={()=>plan.change('advanced')} className={`cursor-pointer ${plan.plan==='advanced'?'border-purple-800 bg-slate-100':'bg-white'} w-full px-3 py-3 border-2 hover:border-purple-800 rounded-md flex items-center gap-3 sm:flex-col sm:items-start sm:h-48 sm:min-w-fit sm:max-w-32 sm:justify-between sm:py-5`}>
        <span className='advanced'/>
        <div className='flex flex-col gap-1'>
          <h3 className='font-medium' style={{color:'var(--marineBlue)'}} >Advanced</h3>
          <p className='text-sm' style={{color:'var(--coolGray)'}} >$12{period.period==='Monthly'?'/mo':'0/yr'}</p>
          <p className={`text-xs ${period.period==='Monthly'&&'invisible'}`} style={{color:'var(--purplishBlue)'}}>2 months free</p>
        </div>
      </div>

      <div onClick={()=>plan.change('pro')} className={`cursor-pointer ${plan.plan==='pro'?'border-purple-800 bg-slate-100':'bg-white'} w-full px-3 py-3 border-2 hover:border-purple-800 rounded-md flex items-center gap-3 sm:flex-col sm:items-start sm:h-48 sm:min-w-fit sm:max-w-32 sm:justify-between sm:py-5`}>
        <span className='pro' />
        <div className='flex flex-col gap-1'>
          <h3 className='font-medium' style={{color:'var(--marineBlue)'}} >Pro</h3>
          <p className='text-sm' style={{color:'var(--coolGray)'}} >$15{period.period==='Monthly'?'/mo':'0/yr'}</p>
          <p className={`text-xs ${period.period==='Monthly'&&'invisible'}`} style={{color:'var(--purplishBlue)'}}>2 months free</p>
        </div>
      </div>
    </div>

    <div className='flex items-center justify-center rounded-md p-2 gap-5' style={{backgroundColor:'var(--magnolia)'}}>
        <div className='font-semibold' style={{color:period.period==='Monthly'?'var(--marineBlue)':'var(--coolGray)'}}>Monthly</div>
        <div onClick={period.change} className={`switch cursor-pointer w-10 h-6 rounded-full flex items-center ${period.period==='Monthly'?'justify-start':'justify-end'} p-1`}><div className='h-4 w-4 bg-white rounded-full' ></div></div>
        <div className='font-semibold' style={{color:period.period==='Yearly'?'var(--marineBlue)':'var(--coolGray)'}}>Yearly</div>
    </div>

  </section>
  )
}

export{SelectPlan};