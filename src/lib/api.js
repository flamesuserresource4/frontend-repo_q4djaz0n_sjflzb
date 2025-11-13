const BASE_URL = import.meta.env.VITE_BACKEND_URL || ''

export async function apiGet(path){
  const r = await fetch(`${BASE_URL}${path}`)
  if(!r.ok) throw new Error(`GET ${path} failed: ${r.status}`)
  return r.json()
}

export async function apiPost(path, body){
  const r = await fetch(`${BASE_URL}${path}`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(body)
  })
  if(!r.ok){
    let msg = `${r.status}`
    try{ const d = await r.json(); msg = d.detail || JSON.stringify(d) }catch{}
    throw new Error(`POST ${path} failed: ${msg}`)
  }
  return r.json()
}
