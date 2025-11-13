import { useEffect, useState } from 'react'

export default function PreorderModal({ open, onClose, color }) {
  const [form, setForm] = useState({ email: '', color })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    setForm(f => ({ ...f, color }))
  }, [color])

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true })
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/preorders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9998] grid place-items-center bg-black/40 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Preorder</h3>
          <button onClick={onClose} className="text-sm opacity-70 hover:opacity-100">Close</button>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <input type="email" required placeholder="Email" className="w-full rounded-md border px-4 py-3 bg-white dark:bg-zinc-900 dark:border-zinc-800" value={form.email} onChange={(e)=>setForm(f=>({...f,email:e.target.value}))} />
          <input type="text" readOnly className="w-full rounded-md border px-4 py-3 bg-white dark:bg-zinc-900 dark:border-zinc-800" value={form.color} />
          <button className="w-full rounded-full bg-black text-white px-6 py-3">Place Preorder</button>
          {status?.loading && <p className="text-sm opacity-70">Submitting...</p>}
          {status?.ok && <p className="text-sm text-emerald-600">Success. ID: {status.id}</p>}
          {status && status.ok === false && <p className="text-sm text-red-500">{status.message}</p>}
        </form>
      </div>
    </div>
  )
}
