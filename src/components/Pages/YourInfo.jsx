import React, { useContext  } from 'react'
import { AppContext } from '../../context/AppContext';

const YourInfo = () => {

  const {nameValue,setNameValue,emailValue,setEmailValue,phoneValue,setPhoneValue,setLocation,nameError,setNameError,emailError,setEmailError,phoneError,setPhoneError,nameError2,setNameError2,emailError2,setEmailError2,phoneError2,setPhoneError2} = useContext(AppContext);

  setLocation(location.pathname);

  function handleChangeName(e) {
    if (e.target.value.length<=30 && /^[a-z ]*$/i.test(e.target.value)) {
      setNameValue(e.target.value);
      setNameError(false);

      if (e.target.value.length===0 || e.target.value.split(' ').length===2) {
        setNameError2(false);
      }

    } 
  }

  function handleChangeEmail(e) {
    if (e.target.value.length<=30 && /^[a-zA-Z0-9_@\.]*$/.test(e.target.value)) {
      setEmailValue(e.target.value.toLowerCase());
      setEmailError(false);

      if (e.target.value.length===0 || /^[a-zA-Z0-9]+_?[a-zA-Z0-9]*([.]?[a-zA-Z0-9]+)*_?[a-zA-Z0-9]*@[a-zA-Z]+(\.[a-zA-Z]{2,3})$/.test(e.target.value)) {
        setEmailError2(false);
      }

    } 
  }

  function handleChangePhone(e) {
    if (e.target.value.length<=16 && /^\+?[0-9 ]*$/.test(e.target.value)) {
      
      if (e.target.value.length%4===0 && e.target.value.length>phoneValue.length && e.target.value.length!==16) {
        setPhoneValue(e.target.value + ' ');
      } else {
        setPhoneValue(e.target.value);
      }  
      setPhoneError(false);

      if (e.target.value.length===0 || e.target.value.length>=7 ) {
        setPhoneError2(false);

      }
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
          <div className='flex items-center justify-between' >
            <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='name'>Name</label>
            {nameError&&<div className='text-xs font-semibold' style={{color:'var(--strawberryRed)'}} >This field is required</div>}
            {nameError2&&<div className='text-xs font-semibold' style={{color:'var(--strawberryRed)'}} >Full name is required</div>}
          </div>
          <input value={nameValue.split(' ').map(w=>w[0]&&w[0].toUpperCase()+w.slice(1).toLowerCase()).slice(0,2).join(' ')} onChange={handleChangeName} placeholder='e.g Levi Ackerman' className={`placeholder:font-medium border-2 h-10 px-2 rounded-md ${(nameError || nameError2)&&'border-red-600'} hover:border-purple-800 outline-none focus:border-purple-800`} id='name' type='text' />
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between' >
            <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='email'>Email Address</label>
            {emailError&&<div className='text-xs font-semibold' style={{color:'var(--strawberryRed)'}} >This field is required</div>}
            {emailError2&&<div className='text-xs font-semibold' style={{color:'var(--strawberryRed)'}} >Invalid email</div>}
          </div>
          <input value={emailValue} onChange={handleChangeEmail} placeholder='e.g captainlevi@paradis.com' className={`placeholder:font-medium border-2 h-10 px-2 rounded-md ${(emailError || emailError2)&&'border-red-600'} hover:border-purple-800 outline-none focus:border-purple-800`} id='email' type='email' />
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between' >
            <label className='text-sm font-medium' style={{color:'var(--marineBlue)'}} htmlFor='phone'>Phone Number</label>
            {phoneError&&<div className='text-xs font-semibold' style={{color:'var(--strawberryRed)'}} >This field is required</div>}
            {phoneError2&&<div className='text-xs font-semibold' style={{color:'var(--strawberryRed)'}} >At least 6 digits</div>}
          </div>
          <input value={phoneValue} onChange={handleChangePhone} placeholder='e.g +1 234 567 890' className={`placeholder:font-medium border-2 h-10 px-2 rounded-md ${(phoneError || phoneError2)&&'border-red-600'}  hover:border-purple-800 outline-none focus:border-purple-800`} id='phone' type='tel' />
        </div>
      </div>
    </section>

  )
}

export {YourInfo}