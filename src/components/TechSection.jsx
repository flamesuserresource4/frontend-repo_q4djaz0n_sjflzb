import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function TechSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const chipGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1])
  const sensorsGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1])

  return (
    <section ref={ref} className="relative w-full bg-white dark:bg-black py-28" aria-label="Technology">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">Technology</h2>
            <p className="text-gray-600 dark:text-zinc-300 text-lg">
              A modular system engineered for intelligence. Components reveal themselves as you scroll.
            </p>
            <div className="space-y-4">
              <motion.div style={{ opacity: chipGlow }} className="rounded-xl border dark:border-zinc-800 p-4">
                <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-zinc-400">Neural Vision Engine</p>
                <p className="text-gray-800 dark:text-zinc-300">Dedicated AI cores process scenes in real-time for superhuman perception.</p>
              </motion.div>
              <motion.div style={{ opacity: sensorsGlow }} className="rounded-xl border dark:border-zinc-800 p-4">
                <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-zinc-400">Gesture Recognition</p>
                <p className="text-gray-800 dark:text-zinc-300">Sub-millimeter precision with low-latency hand and eye tracking.</p>
              </motion.div>
              <motion.div style={{ opacity: scrollYProgress }} className="rounded-xl border dark:border-zinc-800 p-4">
                <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-zinc-400">Real-Time Translation</p>
                <p className="text-gray-800 dark:text-zinc-300">Conversations appear as live captions—private, on-device, and instant.</p>
              </motion.div>
            </div>
          </div>
          <div className="relative h-[520px] rounded-3xl bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black p-6 shadow-inner">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.05),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_40%)]" />
            <div className="relative grid grid-cols-3 gap-4 h-full">
              <motion.div style={{ opacity: chipGlow }} className="rounded-2xl bg-white dark:bg-zinc-900 shadow border dark:border-zinc-800 p-4 flex items-center justify-center">
                <span className="text-sm text-gray-700 dark:text-zinc-300">AI Core</span>
              </motion.div>
              <motion.div style={{ opacity: sensorsGlow }} className="rounded-2xl bg-white dark:bg-zinc-900 shadow border dark:border-zinc-800 p-4 flex items-center justify-center">
                <span className="text-sm text-gray-700 dark:text-zinc-300">Sensors</span>
              </motion.div>
              <motion.div style={{ opacity: scrollYProgress }} className="rounded-2xl bg-white dark:bg-zinc-900 shadow border dark:border-zinc-800 p-4 flex items-center justify-center">
                <span className="text-sm text-gray-700 dark:text-zinc-300">Optics</span>
              </motion.div>
              <motion.div style={{ opacity: scrollYProgress }} className="col-span-3 rounded-2xl bg-white dark:bg-zinc-900 shadow border dark:border-zinc-800 p-4 flex items-center justify-center">
                <span className="text-sm text-gray-700 dark:text-zinc-300">Exploded View</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
