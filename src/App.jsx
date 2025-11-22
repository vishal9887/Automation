import React, { useEffect, useState, useCallback } from 'react'
import Header from './components/Header'
import PromptInput from './components/PromptInput'
import CodeOutput from './components/CodeOutput'
import HistoryPanel from './components/HistoryPanel'
import { simulateGenerateCode } from './api/mockApi'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('JavaScript')
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('mc:history') || '[]')
    } catch {
      return []
    }
  })
  const [filter, setFilter] = useState('')
  const [fontSize, setFontSize] = useState(14)

  // (dark mode only) — no runtime toggle, defaults to dark theme

  // persist history
  useEffect(() => {
    localStorage.setItem('mc:history', JSON.stringify(history))
  }, [history])

  const handleGenerate = useCallback(async ({ prompt, language: lang }) => {
    setLoading(true)
    setCode('')
    setLanguage(lang)
    try {
      const res = await simulateGenerateCode({ prompt, language: lang })
      setCode(res.code)
      const entry = { prompt, language: lang, code: res.code, ts: Date.now() }
      setHistory((s) => [entry, ...s].slice(0, 50))
    } finally {
      setLoading(false)
    }
  }, [])

  const handleSelectHistory = (item) => {
    // Re-run or load into output
    setCode(item.code)
    setLanguage(item.language)
  }

  const handleClearHistory = () => setHistory([])

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      // minimal feedback could be added
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

  return (
    <div className={`app-container p-6`}>
      <div className="shell">
        <Header />

        <div className="center-card grid-2">
          <div>
            <PromptInput onGenerate={handleGenerate} loading={loading} />

            <div className="card mb-4">
              <label className="text-sm font-medium">Search / Filter</label>
              <input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter prompts or language"
                className="mt-2 textarea"
                style={{minHeight:36}}
              />

              <div style={{display:'flex',alignItems:'center',gap:12,marginTop:12}}>
                <label className="muted">Font size</label>
                <input type="range" min="10" max="20" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
                <div style={{marginLeft:'auto'}} className="muted">{fontSize}px</div>
              </div>
            </div>

            <HistoryPanel history={history} onSelect={handleSelectHistory} filter={filter} onClear={handleClearHistory} />
          </div>

          <div>
            <CodeOutput code={code} language={language} fontSize={fontSize} onCopy={handleCopy} />
          </div>
        </div>
      </div>
    </div>
  )
}
