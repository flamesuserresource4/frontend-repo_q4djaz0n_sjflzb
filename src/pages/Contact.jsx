import { useState } from 'react'
import { apiPost } from '../lib/api'

export default function Contact() {
  const [form, setForm] = useState({ email: '', message: '', section: 'general' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await apiPost('/api/feedback', form)
      setStatus({ ok: true, id: res.id })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We usually respond within 24 hours.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <input type="email" required placeholder="Email" className="w-full rounded-md border px-4 py-3 bg-white dark:bg-zinc-900 dark:border-zinc-800" value={form.email} onChange={(e)=>setForm(f=>({...f,email:e.target.value}))} />
          <select className="w-full rounded-md border px-4 py-3 bg-white dark:bg-zinc-900 dark:border-zinc-800" value={form.section} onChange={(e)=>setForm(f=>({...f,section:e.target.value}))}>
            <option value="general">General</option>
            <option value="preorder">Preorder</option>
            <option value="press">Press</option>
          </select>
          <textarea required rows={6} placeholder="Your message" className="w-full rounded-md border px-4 py-3 bg-white dark:bg-zinc-900 dark:border-zinc-800" value={form.message} onChange={(e)=>setForm(f=>({...f,message:e.target.value}))} />
          <div className="flex items-center gap-3">
            <button disabled={loading} className="rounded-full bg-black text-white px-6 py-3 disabled:opacity-60">{loading? 'Sending...' : 'Send'}</button>
            {status && (
              <span className={`text-sm ${status.ok? 'text-emerald-600' : 'text-red-500'}`}>
                {status.ok ? `Sent. ID: ${status.id}` : `Error: ${status.message}`}
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
