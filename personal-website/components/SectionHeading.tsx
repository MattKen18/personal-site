'use client'

import useThemeStore from '@/slices/themeSlice'
import { Raleway, Caveat, } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import fonts from '@/lib/fonts'
import useGradient, {gradients} from '@/lib/gradients'


const textAlign = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end"
}

function SectionHeading({children, gradientValue, font, align} 
  : {children: React.ReactNode,
    gradientValue?: string,
    font?: string,
    align?: "left" | "center" | "right"}
  ){

  const [theme] = useThemeStore(state => (
    [state.theme]
  ))
  
  const [mode, setMode] = useState<string>()

  const [gradient] = useGradient(gradientValue || ''); // returns gradient based on theme mode (dark/light)



  useEffect(() => {
    setMode(theme)
  }, [theme])

  return (
    <div className={`flex ${align && textAlign[align]}`}>
      <h1 className={`${font && fonts[font]} flex items-center justify-center w-fit font-bold text-2xl lg:text-3xl ${gradient ?? 'dark:text-light-text text-slate-500'}`}>
        {children}
      </h1>
    </div>
  )
}

export default SectionHeading