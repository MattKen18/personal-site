'use client'

import { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-QM8FN8HY0H');
  }, [])
  
  return (
    <></>
  )
}

export default GoogleTagManager;