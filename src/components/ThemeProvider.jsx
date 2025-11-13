import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)

const THEME_KEY = 'neural.theme'
const CURSOR_KEY = 'neural.cursor'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'auto'
  const saved = localStorage.getItem(THEME_KEY)
  return saved || 'auto'
}

function getInitialCursor() {
  if (typeof window === 'undefined') return 'glow'
  const saved = localStorage.getItem(CURSOR_KEY)
  return saved || 'glow'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)
  const [cursor, setCursorState] = useState(getInitialCursor)

  const setTheme = (t) => {
    setThemeState(t)
    try { localStorage.setItem(THEME_KEY, t) } catch {}
  }
  const setCursor = (c) => {
    setCursorState(c)
    try { localStorage.setItem(CURSOR_KEY, c) } catch {}
  }

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const useDark = theme === 'dark' || (theme === 'auto' && prefersDark)
    root.classList.toggle('dark', useDark)
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme, cursor, setCursor }), [theme, cursor])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
