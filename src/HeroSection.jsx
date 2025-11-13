import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white" aria-label="Hero">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/9HgHYACX2il7xmYO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient gradients and particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute left-1/4 top-1/3 h-1 w-1 animate-pulse rounded-full bg-slate-300" />
          <div className="absolute left-2/3 top-1/2 h-1 w-1 animate-pulse rounded-full bg-slate-300 [animation-delay:200ms]" />
          <div className="absolute left-1/3 top-2/3 h-1 w-1 animate-pulse rounded-full bg-slate-300 [animation-delay:400ms]" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900"
          >
            Neural Glasses – Experience the Future of Vision.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-600"
          >
            Smart. Seamless. Superhuman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="#product"
              className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-6 py-3 text-sm font-medium text-gray-900 shadow-sm backdrop-blur transition hover:shadow-lg hover:ring-2 hover:ring-gray-900/10"
              style={{ boxShadow: '0 0 30px rgba(0,0,0,0.06)' }}
            >
              <span className="relative">
                Preorder Now
                <span className="absolute inset-0 -z-10 block rounded-full bg-white/60 blur-xl" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
