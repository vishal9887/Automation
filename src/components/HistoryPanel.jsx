import React, { useMemo } from 'react'

export default function HistoryPanel({ history = [], onSelect, filter = '', onClear }) {
  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase()
    if (!q) return history
    return history.filter((h) => h.prompt.toLowerCase().includes(q) || (h.language || '').toLowerCase().includes(q))
  }, [history, filter])

  return (
    <div className="card">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
        <div style={{fontWeight:700}}>Prompt History</div>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <div className="muted" style={{fontSize:12}}>{history.length} total</div>
          <button onClick={onClear} className="pill-btn" aria-label="Clear history">Clear</button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="muted">No history yet.</div>
      ) : (
        <ul style={{display:'flex',flexDirection:'column',gap:8,maxHeight:220,overflow:'auto'}}>
          {filtered.map((h, idx) => (
            <li key={idx} onClick={() => onSelect(h)} style={{padding:12,borderRadius:10,background:'transparent',border:'1px solid var(--border)',cursor:'pointer'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontSize:12,color:'var(--accent)'}}>{h.language}</div>
                <div className="muted" style={{fontSize:11}}>{new Date(h.ts).toLocaleString()}</div>
              </div>
              <div style={{marginTop:6,fontSize:14}}>{h.prompt}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
