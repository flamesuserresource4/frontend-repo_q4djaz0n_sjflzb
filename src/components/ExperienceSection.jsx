import { motion } from 'framer-motion'

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-white py-28" aria-label="Experience">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Experience</h2>
            <p className="text-gray-600 text-lg">
              Interfaces that feel like thought. Holographic UI floats naturally with responsive depth.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-300 to-blue-300 animate-pulse" />
              <p className="text-gray-700">Real-time voice wave reacts to your input.</p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-3xl border bg-white shadow">
            <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(120deg,rgba(0,0,0,0.04),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.05),transparent_30%)]" />
            <div className="relative h-full w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="rounded-2xl border bg-white/70 p-6 backdrop-blur shadow"
              >
                <div className="h-56 w-80 rounded-lg bg-gradient-to-b from-indigo-50 to-white border flex items-center justify-center">
                  <span className="text-gray-700">3D Avatar + AR Overlays</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
