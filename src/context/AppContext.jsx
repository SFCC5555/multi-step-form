import { useState, createContext } from "react";
import { usePeriod } from "../hooks/usePeriod";
import { usePlan } from "../hooks/usePlan";
import { useAdd } from "../hooks/useAdd";

export const AppContext = createContext();

const AppContextProvider = ({children})=>{

    const [nameValue,setNameValue] = useState('');
    const [emailValue,setEmailValue] = useState('');
    const [phoneValue,setPhoneValue] = useState('');
    const [locationValue,setLocation] = useState(location.pathname);
    const [submit,setSubmit] = useState(false);
    const [nameError,setNameError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [phoneError,setPhoneError] = useState(false);
    const [nameError2,setNameError2] = useState(false);
    const [emailError2,setEmailError2] = useState(false);
    const [phoneError2,setPhoneError2] = useState(false);

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
                                        locationValue,
                                        setLocation,
                                        submit,
                                        setSubmit,
                                        period,
                                        plan,
                                        onlineService,
                                        largerStorage,
                                        customizableProfile,
                                        nameError,
                                        setNameError,
                                        emailError,
                                        setEmailError,
                                        phoneError,
                                        setPhoneError,
                                        nameError2,
                                        setNameError2,
                                        emailError2,
                                        setEmailError2,
                                        phoneError2,
                                        setPhoneError2
                                        }} >
        {children}
    </AppContext.Provider>
}

export {AppContextProvider};