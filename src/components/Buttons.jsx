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
    <div className='absolute px-5 sm:px-0 -bottom-16 sm:bottom-0 sm:relative w-full flex items-center justify-between'>
      <button onClick={handleBackButton} className={`${location.pathname==='/YOUR-INFO'&&'invisible'} backButton p-2 font-medium`} >Go Back</button>
      <button onClick={handleMainButton} className='mainButton p-2 rounded-md text-white' >{location.pathname==='/SUMMARY'?'Confirm':'Next Step'}</button>
    </div>
  )
}

export {Buttons};