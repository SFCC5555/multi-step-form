import React, { useState } from 'react'

const usePlan = () => {

    const [plan,setPlan] = useState('arcade');

    const change = (to)=> {

        setPlan(to);

    }

  return {
    plan,
    change
  }
}

export {usePlan};