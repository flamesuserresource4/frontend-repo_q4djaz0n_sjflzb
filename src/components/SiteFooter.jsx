export default function SiteFooter() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-white to-gray-50 border-t">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-black" />
          <span className="text-sm font-medium text-gray-900">Neural</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Contact</a>
          <a href="#" className="hover:text-gray-900">Twitter/X</a>
          <a href="#" className="hover:text-gray-900">Instagram</a>
        </nav>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Neural. All rights reserved.</p>
      </div>
    </footer>
  )
}
