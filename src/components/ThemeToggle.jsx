import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const toggle = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="fixed top-4 right-4 z-[9999] inline-flex items-center gap-2 rounded-full border dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/70 backdrop-blur px-4 py-2 text-sm text-gray-900 dark:text-white shadow hover:shadow-md"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
