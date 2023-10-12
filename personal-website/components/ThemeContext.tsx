'use client'

import React, { ReactNode, use, useEffect, useState } from 'react'
import useThemeStore from '@/slices/themeSlice'

function ThemeContext({ children } : {children: ReactNode}) {
  const [theme] = useThemeStore(state => (
    [state.theme]
  ))
  
  const [mode, setMode] = useState<string>()

  useEffect(() => {
    setMode(theme)
  }, [theme])


  return (
    <div className={`${mode}`}>
      <div className={` ${mode === 'light' ? 'bg-gradient-to-b from-rose-100 to-teal-100'
        : 'dark:text-light-text bg-gradient-to-b from-slate-900 via-gray-700 to-gray-600'} 
        relative`
        }>
        <div className='absolute w-screen h-fit top-0'>

        </div>
        { children }
      </div>
    </div>
  )
}

export default ThemeContext