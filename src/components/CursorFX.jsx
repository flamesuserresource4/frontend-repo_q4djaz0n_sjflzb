import { useEffect } from 'react'
import { useTheme } from './ThemeProvider'

export default function CursorFX(){
  const { cursor } = useTheme()

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--cursor', cursor)

    if (cursor === 'none') {
      document.body.style.cursor = 'none'
    } else {
      document.body.style.cursor = 'auto'
    }

    const move = (e) => {
      const ring = document.getElementById('cursor-ring')
      const glow = document.getElementById('cursor-glow')
      if (!ring || !glow) return
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [cursor])

  return (
    <>
      {/* Ring cursor */}
      <div
        id="cursor-ring"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 22,
          height: 22,
          borderRadius: 9999,
          border: '1px solid rgba(255,255,255,0.6)',
          transform: 'translate(-100px,-100px)',
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          transition: 'transform 60ms linear',
          opacity: cursor === 'ring' ? 1 : 0,
          zIndex: 9999
        }}
      />
      {/* Glow cursor */}
      <div
        id="cursor-glow"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 80,
          height: 80,
          borderRadius: 9999,
          background: 'radial-gradient(closest-side, rgba(59,130,246,0.25), transparent)',
          transform: 'translate(-100px,-100px)',
          pointerEvents: 'none',
          filter: 'blur(8px)',
          opacity: cursor === 'glow' ? 1 : 0,
          zIndex: 9998
        }}
      />
    </>
  )
}
