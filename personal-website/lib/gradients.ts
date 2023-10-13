'use client'

import useThemeStore from "@/slices/themeSlice"
import { useEffect, useState } from "react";

export const gradients: Gradient = {
  'dark': {
    "background": "bg-gradient-to-b from-slate-900 via-gray-700 to-gray-600",
    "base": "",
    "logo": "bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-rose-400 to-yellow-600",
    "heading1": "bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-white to-blue-400",
    "gray-blue-purple":  'bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-blue-800 to-pink-900',
    "red-blue-purple":  'bg-clip-text text-transparent bg-gradient-to-r  from-rose-500 via-blue-500 to-purple-600',
    "pink-red": 'bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-red-600',
    "white-purple": 'bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800',
    "blue-purple": 'bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-600 to-pink-800',
  },
  'light': {
    "background": "bg-gradient-to-b from-rose-100 to-teal-100",
    "base": "",
    "logo": "bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-rose-600 to-blue-800",
    "heading1": "bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-400",
    "gray-blue-purple":  'bg-clip-text text-transparent bg-gradient-to-r  from-gray-500 via-blue-500 to-purple-600',
    "red-blue-purple":  'bg-clip-text text-transparent bg-gradient-to-r  from-rose-500 via-blue-500 to-purple-600',
    "pink-red": 'bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-red-600',
    "white-purple": 'bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800',
    "blue-purple": 'bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800',
  }
}

const useGradient = (gradientValue?: string) => {
  const theme: string = useThemeStore(state => state.theme);
  const [gradient, setGradient] = useState<string>();

  useEffect(() => {
    setGradient(gradients[theme][gradientValue!]) // ensure that the gradient corresponds to the current theme
  }, [theme, gradientValue])


  return [gradient, theme]
}

export default useGradient;