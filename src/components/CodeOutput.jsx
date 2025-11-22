import React from 'react'

export default function CodeOutput({ code = '', language = 'javascript', fontSize = 14, onCopy }) {
  const lines = (code || '// Generated code will appear here...').split('\n')

  const copy = async () => {
    try {
      const text = code || ''
      if (onCopy) onCopy(text)
      else await navigator.clipboard.writeText(text)
    } catch (e) {
      console.warn('copy failed', e)
    }
  }

  return (
    <div className="code-card" style={{display:'flex',flexDirection:'column'}}>
      <div className="code-toolbar">
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{fontWeight:700}}>Output</div>
          <div style={{fontSize:12,padding:'4px 8px',borderRadius:8,background:'rgba(255,255,255,0.02)',border:'1px solid var(--border)'}} className="muted">{language}</div>
        </div>

        <div style={{display:'flex',gap:8}}>
          <button onClick={copy} className="toolbar-btn primary" title="Copy to clipboard" aria-label="Copy code">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M16 1H4a2 2 0 0 0-2 2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="8" y="6" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Copy</span>
          </button>
        </div>
      </div>

      <div className="code-body" style={{display:'flex'}}>
        <div className="gutter" aria-hidden>
          {lines.map((_, i) => (
            <div key={i} style={{height: '20px', lineHeight: '20px'}}>{i + 1}</div>
          ))}
        </div>

        <div className="code-view" style={{fontSize}}>
          <pre style={{margin:0}}><code>{code || '// Generated code will appear here...'}</code></pre>
        </div>
      </div>
    </div>
  )
}
