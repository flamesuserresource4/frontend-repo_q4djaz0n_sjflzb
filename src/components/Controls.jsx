import { useTheme } from './ThemeProvider'

export default function Controls(){
  const { theme, setTheme, cursor, setCursor } = useTheme()
  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2 rounded-full border dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur px-3 py-2 text-xs text-gray-900 dark:text-white shadow">
      <select value={theme} onChange={e=>setTheme(e.target.value)} className="rounded-md bg-transparent">
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select value={cursor} onChange={e=>setCursor(e.target.value)} className="rounded-md bg-transparent">
        <option value="glow">Glow</option>
        <option value="ring">Ring</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}
