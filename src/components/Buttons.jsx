import React from 'react';
import '../styles/Buttons.css';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {

  const navigate = useNavigate();

  function handleMainButton() {
    if (location.pathname==='/YOUR-INFO') {
      navigate('/SELECT-PLAN');
    } else if (location.pathname==='/SELECT-PLAN') {
      navigate('/ADD-ONS');
    } else if (location.pathname==='/ADD-ONS') {
      navigate('/SUMMARY');
    } else if (location.pathname==='/SUMMARY') {
      alert('CONFIRM');
    }
  }

function handleBackButton() {
  if (location.pathname==='/SUMMARY') {
    navigate('/ADD-ONS');
  } else if (location.pathname==='/ADD-ONS') {
    navigate('/SELECT-PLAN');
  } else if (location.pathname==='/SELECT-PLAN') {
    navigate('/YOUR-INFO');
  } 

}


  return (
    <div className='absolute z-10 bottom-0 -translate-y-10 px-5 sm:px-52 md:px-64 sm:translate-x-28 sm:-translate-y-12 w-full sm:max-w-4xl flex items-center justify-between'>
      <button onClick={handleBackButton} className={`${location.pathname==='/YOUR-INFO'&&'invisible'} backButton p-2 font-medium`} >Go Back</button>
      <button onClick={handleMainButton} className='mainButton p-2 rounded-md text-white' >{location.pathname==='/SUMMARY'?'Confirm':'Next Step'}</button>
    </div>
  )
}

export {Buttons};