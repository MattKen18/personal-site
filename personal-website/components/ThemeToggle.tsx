'use client'

import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import useThemeStore from '@/slices/themeSlice'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'

function ThemeToggle() {
  const [enabled, setEnabled] = useState(false) // enabled == dark mode on

  const [theme, toggleTheme] = useThemeStore(state => (
    [state.theme, state.toggleTheme]
  ))
  
  const toggleEnable = () => {
    setEnabled(state => !state)
    toggleTheme()
  }

  useEffect(() => {
    setEnabled(theme === "dark" ? true : false)
  }, [theme])

  return (
    <Switch
      checked={enabled}
      onChange={toggleEnable}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-10 w-16 items-center rounded-full text-dark-gray/60 hover:text-dark-gray`}
    >
      <span className="sr-only">Toggle Dark/Light Mode</span>
      <span
        className={`${
          enabled ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-8 w-8 transform rounded-full bg-white p-[2px] transition`}
      >
        {enabled ? <MoonIcon className='' /> : <SunIcon className='' />}
      </span>
    </Switch>
  )
}

export default ThemeToggle;