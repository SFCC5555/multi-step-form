import { useState } from 'react';

const useAdd = () => {

    const [stateAdd,setStateAdd] = useState(false);

    const change = ()=> {
        setStateAdd(prev=>!prev);
    }



  return {
    stateAdd,
    change
    }
}

export {useAdd}