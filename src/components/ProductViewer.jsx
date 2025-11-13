import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COLORS = [
  { key: 'black', label: 'Black', chip: 'bg-neutral-900', surface: 'from-neutral-200 to-white' },
  { key: 'titanium', label: 'Titanium', chip: 'bg-zinc-500', surface: 'from-zinc-200 to-white' },
  { key: 'clear', label: 'Clear', chip: 'bg-slate-200', surface: 'from-slate-100 to-white' },
]

export default function ProductViewer() {
  const [color, setColor] = useState(COLORS[0])

  return (
    <section id="product" className="relative w-full bg-white py-28" aria-label="Product">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Neural Glasses</h2>
          <div className="flex items-center gap-2">
            {COLORS.map(c => (
              <button
                key={c.key}
                onClick={() => setColor(c)}
                className={`h-9 w-9 rounded-full border shadow-inner ${c.chip} ring-offset-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20`}
                aria-label={`Switch to ${c.label}`}
                title={c.label}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className={`relative h-[420px] rounded-3xl border bg-gradient-to-b ${color.surface} p-6 shadow`}>
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_40%_20%,rgba(0,0,0,0.06),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.05),transparent_35%)]" />
            <div className="relative h-full w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={color.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="h-64 w-96 rounded-xl bg-white/70 backdrop-blur border shadow flex items-center justify-center"
                >
                  <span className="text-gray-700">360° Viewer — {color.label}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Precision-engineered optics and AI designed to disappear. Quiet power. Effortless control.
            </p>
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow transition hover:shadow-lg">Preorder</button>
              <button className="rounded-full border px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
