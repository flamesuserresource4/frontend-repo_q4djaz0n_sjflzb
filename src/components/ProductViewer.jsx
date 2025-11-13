import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'

const COLORS = [
  { key: 'black', label: 'Black', baseColor: '#0a0a0a' },
  { key: 'titanium', label: 'Titanium', baseColor: '#9b9b9b' },
  { key: 'clear', label: 'Clear', baseColor: '#d1d5db' },
]

function Glasses({ color = '#0a0a0a' }) {
  useFrame((state, dt) => {
    state.scene.rotation.y += dt * 0.2
  })
  return (
    <group>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[1.2, 0.06, 32, 100]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.25} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0, -0.1]}>
        <boxGeometry args={[2.4, 0.5, 0.1]} />
        <meshPhysicalMaterial color={color} metalness={0.7} roughness={0.2} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      <mesh position={[0, 0.05, 0.02]}>
        <boxGeometry args={[2.2, 0.4, 0.02]} />
        <meshPhysicalMaterial color={'#bcd7ff'} transmission={0.95} roughness={0.05} thickness={0.2} />
      </mesh>
    </group>
  )
}

export default function ProductViewer({ onPreorder }) {
  const [color, setColor] = useState(COLORS[0])

  const handlePreorder = () => {
    if (onPreorder) onPreorder(color.key)
  }

  return (
    <section id="product" className="relative w-full bg-white dark:bg-black py-28" aria-label="Product">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">Neural Glasses</h2>
          <div className="flex items-center gap-2">
            {COLORS.map(c => (
              <button
                key={c.key}
                onClick={() => setColor(c)}
                className={`h-9 w-9 rounded-full border shadow-inner ring-offset-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20`} 
                style={{ background: c.baseColor }}
                aria-label={`Switch to ${c.label}`}
                title={c.label}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className={`relative h-[460px] rounded-3xl border bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-black p-0 shadow overflow-hidden`}>
            <Canvas shadows camera={{ position: [2.5, 1.2, 2.5], fov: 40 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
              <Glasses color={color.baseColor} />
              <Environment preset="studio" />
              <ContactShadows position={[0, -0.9, 0]} opacity={0.35} scale={10} blur={2.5} far={2} />
              <OrbitControls enablePan={false} minDistance={2} maxDistance={6} />
            </Canvas>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Precision-engineered optics and AI designed to disappear. Quiet power. Effortless control.
            </p>
            <div className="flex items-center gap-4">
              <button onClick={handlePreorder} className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow transition hover:shadow-lg">Preorder</button>
              <a href="/contact" className="rounded-full border px-6 py-3 text-sm font-medium text-gray-900 dark:text-white dark:border-zinc-700 transition hover:bg-gray-50 dark:hover:bg-zinc-800">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
