'use client'

import React, { ReactNode, use, useEffect, useState } from 'react'
import useThemeStore from '@/slices/themeSlice'
import { usePathname } from 'next/navigation'

function ThemeContext({ children } : {children: ReactNode}) {
  const [theme] = useThemeStore(state => (
    [state.theme]
  ))
  
  const [mode, setMode] = useState<string>()

  useEffect(() => {
    setMode(theme)
  }, [theme])

  const currentPath = usePathname();

  return (
    <div className={`${mode}`}>
      <div className={` ${(mode === 'light') ? (currentPath === '/') ? 'bg-slate-200/40' : 'bg-gradient-to-b from-rose-100/50 to-teal-100/50'
        : mode === 'dark' && 'dark:text-light-text bg-gradient-to-b from-slate-900 via-gray-700 to-gray-600'} 
        relative`
        }>
        { children }
      </div>
    </div>
  )
}

export default ThemeContext