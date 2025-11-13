import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function DesignSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section ref={ref} className="relative w-full bg-white dark:bg-black py-28" aria-label="Design">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">Design</h2>
            <p className="text-gray-600 dark:text-zinc-300 text-lg">
              Meticulously machined aluminum frames, crystal lenses, and optics tuned to perfection.
            </p>
          </div>
          <div className="relative h-[520px]">
            <motion.div style={{ y: y1 }} className="absolute inset-x-0 top-0 h-40 rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-black shadow" />
            <motion.div style={{ y: y2 }} className="absolute inset-x-0 top-20 h-64 rounded-3xl bg-white dark:bg-zinc-900 shadow border dark:border-zinc-800 flex items-center justify-center">
              <span className="text-gray-700 dark:text-zinc-300">Reflective Surface</span>
            </motion.div>
            <motion.div style={{ y: y1 }} className="absolute inset-x-0 bottom-0 h-56 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)] flex items-center justify-center">
              <span className="text-gray-700 dark:text-zinc-300">Lighting Environments</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
