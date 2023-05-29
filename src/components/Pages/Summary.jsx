import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Summary = () => {

  const {period,plan,onlineService,largerStorage,customizableProfile,submit,setLocation} = useContext(AppContext);

  setLocation(location.pathname);

  const price = {Monthly:{arcade:9,advanced:12,pro:15},
                Yearly:{arcade:90,advanced:120,pro:150}};

  const addOnList = [{name:'Online service',price:period.period==='Monthly'?1:10,status:onlineService.stateAdd},
                    {name:'Larger storage',price:period.period==='Monthly'?2:20,status:largerStorage.stateAdd},
                    {name:'Customizable profile',price:period.period==='Monthly'?2:20,status:customizableProfile.stateAdd}]

  const totalPrice= price[period.period][plan.plan] + addOnList.filter(i=>i.status).map(i=>i.price).reduce((a,b)=>a+b,0);

  return (
    <>
    <section className={`${submit&&'hidden'} flex flex-col gap-4 h-full w-full sm:justify-start sm:gap-10`}>
      <div className='flex flex-col gap-3 sm:gap-10' >
        <h1 className='text-3xl font-bold' style={{color:'var(--marineBlue)'}} >Finishing up</h1>
        <p className='font-medium' style={{color:'var(--coolGray)'}}>Double-check everything looks OK before confirming.</p>
      </div>
      <section className='rounded-md p-4 flex flex-col gap-3' style={{backgroundColor:'var(--magnolia)'}}>
        <div className='flex items-center justify-between border-b-2 pb-4' >
          <div>
            <h3 className='font-bold' style={{color:'var(--marineBlue)'}} >{plan.plan[0].toUpperCase()+plan.plan.slice(1)} ({period.period})</h3>
            <button onClick={period.change} className='underline' style={{color:'var(--coolGray)'}}>Change</button>
          </div>
          <div className='font-bold' style={{color:'var(--marineBlue)'}}>${price[period.period][plan.plan]}/{period.period==='Monthly'?'mo':'yr'}</div>
        </div>

        <section className='flex flex-col gap-3 font-medium'>
          {addOnList.filter(i=>i.status).map(i=>

          <div key={i.name} className='flex items-center justify-between' >
            <div style={{color:'var(--coolGray)'}}>{i.name}</div>
            <div style={{color:'var(--marineBlue)'}} >+${i.price}/{period.period==='Monthly'?'mo':'yr'}</div>
          </div>

          )}
        </section>
      </section>
      <div className='flex items-center justify-between' >
            <div style={{color:'var(--coolGray)'}}>Total (per {period.period==='Monthly'?'month':'year'}) </div>
            <div className='font-bold text-xl' style={{color:'var(--purplishBlue)'}} >${totalPrice}/{period.period==='Monthly'?'mo':'yr'}</div>
          </div>
    </section>

    {submit&&<section className='h-full flex flex-col items-center justify-center text-center gap-5'>
                <span className='thankIcon' />
                <h1 className='text-3xl font-bold' style={{color:'var(--marineBlue)'}}>Thank you!</h1>
                <p className='font-medium' style={{color:'var(--coolGray)'}} >Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>

            </section>}
    </>
  )
}

export {Summary}