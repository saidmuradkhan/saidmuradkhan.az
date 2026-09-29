import { useEffect, useRef, useState } from 'react'

const SECTIONS = ['about', 'work', 'projects', 'skills', 'contact']

export default function Header({ t, theme, setTheme, go }) {
  const [active, setActive] = useState('')
  const [hidden, setHidden] = useState(false)
  const bar = useRef(null)

  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const y = scrollY
      const max = document.documentElement.scrollHeight - innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`
      setHidden(y > 200 && y > last)
      last = y
      let cur = ''
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < innerHeight * 0.45) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const link = (e, id) => { e.preventDefault(); go(id) }

  return (
    <>
      <div className="progress" ref={bar} />
      <header className={`topbar ${hidden ? 'hide' : ''}`}>
        <a href="#top" className="logo" onClick={(e) => link(e, 'top')} data-magnetic>
          SM<span>{"{ }"}</span>
        </a>
        <div className="top-actions">
          <button
            className="theme-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            data-magnetic
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
            )}
          </button>
        </div>
      </header>

      <nav className="dock" aria-label="Sections">
        {SECTIONS.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={(e) => link(e, id)}>
            {t.nav[id]}
          </a>
        ))}
      </nav>
    </>
  )
}
