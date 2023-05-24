import React, { useContext  } from 'react'
import { AppContext } from '../../context/AppContext';

const YourInfo = () => {

  const {nameValue,setNameValue,emailValue,setEmailValue,phoneValue,setPhoneValue} = useContext(AppContext);

  function handleChangeName(e) {
    if (e.target.value.length<=25 && /^[a-z ]*$/i.test(e.target.value)) {
      setNameValue(e.target.value);
    } 
  }

  function handleChangeEmail(e) {
    if (e.target.value.length<=25 && /^[a-zA-Z0-9_@\.]*$/.test(e.target.value)) {
      setEmailValue(e.target.value.toLowerCase());
    } 
  }

  function handleChangePhone(e) {
    if (e.target.value.length<=16 && /^\+?[0-9 ]*$/.test(e.target.value)) {
      
      if (e.target.value.length%4===0 && e.target.value.length>phoneValue.length && e.target.value.length!==16) {
        setPhoneValue(e.target.value + ' ');
      } else {
        setPhoneValue(e.target.value);
      }  
      console.log(e.target)
    } 

  }



  return (
    <section className='flex flex-col gap-4 h-full w-full sm:justify-between'>
      <div className='flex flex-col gap-3 sm:gap-10 mb-6' >
        <h1 className='text-3xl font-bold' style={{color:'var(--marineBlue)'}} >Personal info</h1>
        <p className='font-medium' style={{color:'var(--coolGray)'}}>Please provide your name, email address, and phone number.</p>
      </div>

      <div className='flex flex-col justify-end gap-4 sm:gap-4 sm:justify-center h-full'>
        <div className='flex flex-col'>
          <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='name'>Name</label>
          <input value={nameValue.split(' ').map(w=>w[0]&&w[0].toUpperCase()+w.slice(1).toLowerCase()).slice(0,2).join(' ')} onChange={handleChangeName} placeholder='e.g Levi Ackerman' className='placeholder:font-medium border-2 h-10 px-2 rounded-md' id='name' type='text' />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='email'>Email Address</label>
          <input value={emailValue} onChange={handleChangeEmail} placeholder='e.g captainlevi@paradis.com' className='placeholder:font-medium border-2 h-10 px-2 rounded-md' id='email' type='email' />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='phone'>Phone Number</label>
          <input value={phoneValue} onChange={handleChangePhone} placeholder='e.g +1 234 567 890' className='placeholder:font-medium border-2 h-10 px-2 rounded-md' id='phone' type='tel' />
        </div>
      </div>
    </section>

  )
}

export {YourInfo}