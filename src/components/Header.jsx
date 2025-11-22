import React from 'react'

export default function Header() {
  return (
    <header className="header-row mb-6">
      <div className="brand">
        <div className="logo" aria-hidden>
          MC
        </div>
        <div>
          <h1>Mini Code Copilot</h1>
          <p className="muted">Focused code snippets · lightning fast</p>
        </div>
      </div>
    </header>
  )
}
