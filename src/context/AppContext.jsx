import { useState, createContext } from "react";
import { usePeriod } from "../hooks/usePeriod";
import { usePlan } from "../hooks/usePlan";
import { useAdd } from "../hooks/useAdd";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const [nameValue,setNameValue] = useState('');
    const [emailValue,setEmailValue] = useState('');
    const [phoneValue,setPhoneValue] = useState('');

    const period = usePeriod();

    const plan = usePlan();

    const onlineService = useAdd();

    const largerStorage = useAdd();

    const customizableProfile = useAdd();
    
    
    return <AppContext.Provider value={{nameValue,
                                        setNameValue,
                                        emailValue,
                                        setEmailValue,
                                        phoneValue,
                                        setPhoneValue,
                                        period,
                                        plan,
                                        onlineService,
                                        largerStorage,
                                        customizableProfile
                                        }} >
        {children}
    </AppContext.Provider>
}

export {AppContextProvider};