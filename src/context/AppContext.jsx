import { useState, createContext } from "react";
import { usePeriod } from "../hooks/usePeriod";
import { usePlan } from "../hooks/usePlan";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const [nameValue,setNameValue] = useState('');
    const [emailValue,setEmailValue] = useState('');
    const [phoneValue,setPhoneValue] = useState('');

    const period = usePeriod();

    const plan = usePlan();
    
    
    return <AppContext.Provider value={{nameValue,
                                        setNameValue,
                                        emailValue,
                                        setEmailValue,
                                        phoneValue,
                                        setPhoneValue,
                                        period,
                                        plan
                                        }} >
        {children}
    </AppContext.Provider>
}

export {AppContextProvider};