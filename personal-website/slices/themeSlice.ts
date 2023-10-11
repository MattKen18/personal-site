import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ThemeState {
  theme: string;
  toggleTheme: () => void
  setTheme: (theme: string) => void;
}

const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: "light",
        toggleTheme: () => (
          set((state) => ({theme: state.theme === "light" ? "dark" : "light"}))
        ),
        setTheme: (theme: string) => (
          set((state) => ({theme: theme}))
        )
      }),
      {name: 'theme-storage'}
    ))
)

export default useThemeStore;
