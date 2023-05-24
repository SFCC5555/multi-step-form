import { useState, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const [nameValue,setNameValue] = useState('');
    const [emailValue,setEmailValue] = useState('');
    const [phoneValue,setPhoneValue] = useState('');
    
    
    return <AppContext.Provider value={{nameValue,
                                        setNameValue,
                                        emailValue,
                                        setEmailValue,
                                        phoneValue,
                                        setPhoneValue     
                                        }} >
        {children}
    </AppContext.Provider>
}

export {AppContextProvider};