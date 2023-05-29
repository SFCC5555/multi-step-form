import React, { useContext } from 'react';
import '../styles/Buttons.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Buttons = () => {

  const navigate = useNavigate();
  const {setLocation,submit,setSubmit,nameValue,setNameError,setNameError2,emailValue,setEmailError,setEmailError2,phoneValue,setPhoneError,setPhoneError2} = useContext(AppContext);

  function handleMainButton() {
    if (location.pathname==='/YOUR-INFO') {

      if (nameValue && emailValue && phoneValue && nameValue.split(' ').length===2 && /^[a-zA-Z0-9]+_?[a-zA-Z0-9]*([.]?[a-zA-Z0-9]+)*_?[a-zA-Z0-9]*@[a-zA-Z]+(\.[a-zA-Z]{2,3})$/.test(emailValue) && phoneValue.length>=7) {
        navigate('/SELECT-PLAN');
        setLocation('/SELECT-PLAN');
      }

      if  (!nameValue) {
        setNameError(true);
      }

      if ( nameValue && nameValue.split(' ').length!==2) {
        setNameError2(true);
      }

      if  (!emailValue) {
        setEmailError(true);
      }

      if  (emailValue && !/^[a-zA-Z0-9]+_?[a-zA-Z0-9]*([.]?[a-zA-Z0-9]+)*_?[a-zA-Z0-9]*@[a-zA-Z]+(\.[a-zA-Z]{2,3})$/.test(emailValue)) {
        setEmailError2(true);
      }

      if  (!phoneValue) {
        setPhoneError(true);
      }

      if ( phoneValue && phoneValue.length<7) {
        setPhoneError2(true);
      }


    } else if (location.pathname==='/SELECT-PLAN') {
      navigate('/ADD-ONS');
      setLocation('/ADD-ONS');
    } else if (location.pathname==='/ADD-ONS') {
      navigate('/SUMMARY');
      setLocation('/SUMMARY');
    } else if (location.pathname==='/SUMMARY') {
      setSubmit(true);
    }
  }

function handleBackButton() {
  if (location.pathname==='/SUMMARY') {
    navigate('/ADD-ONS');
    setLocation('/ADD-ONS');
  } else if (location.pathname==='/ADD-ONS') {
    navigate('/SELECT-PLAN');
    setLocation('/SELECT-PLAN');
  } else if (location.pathname==='/SELECT-PLAN') {
    navigate('/YOUR-INFO');
    setLocation('/YOUR-INFO');
  } 

}


  return (
    <div className={`${submit&&'hidden'} absolute px-5 sm:px-0 -bottom-16 sm:bottom-0 sm:relative w-full flex items-center justify-between`}>
      <button onClick={handleBackButton} className={`${location.pathname==='/YOUR-INFO'&&'invisible'} backButton p-2 font-medium`} >Go Back</button>
      <button onClick={handleMainButton} className='mainButton p-2 rounded-md text-white' >{location.pathname==='/SUMMARY'?'Confirm':'Next Step'}</button>
    </div>
  )
}

export {Buttons};