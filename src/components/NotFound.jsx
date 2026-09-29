import { useEffect } from 'react'
import { content, links } from '../data.js'

export default function NotFound() {
  const path = window.location.pathname.replace(/^\/+/, '') || 'this-page'
  const name = `${content.name.first} ${content.name.last}`

  useEffect(() => {
    document.title = `Page not found — ${name}`
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex'
    document.head.appendChild(robots)
    return () => robots.remove()
  }, [name])

  return (
    <div className="nf">
      <header className="nf-bar">
        <a className="logo" href="/">SM<span>.</span></a>
        <span className="mono muted">Error 404</span>
      </header>
      <main className="nf-main">
        <p className="mono nf-code">(404) — Page not found</p>
        <h1 className="nf-title">4<span>0</span>4</h1>
        <h2 className="nf-head">This page doesn't exist.</h2>
        <p className="nf-text">The link may be broken, or the page may have moved. Everything I've built is on the home page.</p>
        <p className="nf-term">
          <b>❯</b> cd {path}<br />
          <span>cd: no such file or directory</span>
        </p>
        <div className="nf-actions">
          <a className="btn btn-fill" href="/">Back to home →</a>
          <a className="btn" href="/#projects">See my work</a>
        </div>
      </main>
      <footer className="nf-bar mono muted">
        <span>© {new Date().getFullYear()} {name}</span>
        <a href={`mailto:${links.email}`}>{links.email}</a>
      </footer>
    </div>
  )
}
