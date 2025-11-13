export default function SiteFooter() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-950 border-t dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-black dark:bg-white" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">Neural</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600 dark:text-zinc-400">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Twitter/X</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Instagram</a>
        </nav>
        <p className="text-xs text-gray-500 dark:text-zinc-500">© {new Date().getFullYear()} Neural. All rights reserved.</p>
      </div>
    </footer>
  )
}
