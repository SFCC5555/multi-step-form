import React from 'react';
import { useState } from 'react';

const usePeriod = () => {

    const [period,setPeriod] = useState('Monthly');

    const change = ()=> {
        period==='Monthly'?setPeriod('Yearly'):setPeriod('Monthly');
    }



  return {
    period,
    change
    }
}

export {usePeriod}