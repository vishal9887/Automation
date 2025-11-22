import React, { useState } from 'react'

export default function PromptInput({ onGenerate, loading, initialPrompt = '', initialLang = 'JavaScript' }) {
  const [prompt, setPrompt] = useState(initialPrompt)
  const [language, setLanguage] = useState(initialLang)

  const submit = (e) => {
    e.preventDefault()
    if (!prompt.trim()) return
    onGenerate({ prompt: prompt.trim(), language })
  }

  const examples = [
    'Reverse a string',
    'Quick sort implementation',
    'HTTP request in Node.js'
  ]

  return (
    <form onSubmit={submit} className="center-card mb-8">
      <label className="text-sm font-medium">Describe what you want</label>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={6}
        placeholder="Write a natural language prompt, e.g. 'function to reverse a string'"
        className="textarea mt-3"
      />

      <div className="mt-4" style={{display:'flex',gap:10,alignItems:'center'}}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="pill-btn"
          aria-label="Language"
        >
          <option>JavaScript</option>
          <option>Python</option>
          <option>C++</option>
        </select>

        <div style={{flex:1}} />

        <button type="submit" disabled={loading} className="pill-btn primary">
          {loading ? (
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          ) : null}
          <span style={{marginLeft: loading ? 8 : 0}}>Generate</span>
        </button>
      </div>

      <div className="mt-4 chips text-sm muted">
        {examples.map((e, i) => (
          <button key={i} type="button" onClick={() => setPrompt(e)} className="chip">{e}</button>
        ))}
      </div>
    </form>
  )
}
