import { useRef, useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { isTouch } from '../hooks.jsx'

// Mini, playable seat map — a nod to the iTicket clone.
function SeatMap({ l }) {
  const taken = new Set([3, 4, 11, 12, 20, 27, 28, 35])
  const [sel, setSel] = useState(new Set([18, 19]))
  const toggle = (i) => {
    if (taken.has(i)) return
    setSel((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n })
  }
  return (
    <div className="vis seatmap" onClick={(e) => e.stopPropagation()}>
      <div className="stage mono">{l.stage}</div>
      <div className="seats">
        {Array.from({ length: 40 }, (_, i) => (
          <button
            key={i}
            className={`seat ${taken.has(i) ? 'taken' : ''} ${sel.has(i) ? 'sel' : ''}`}
            onClick={() => toggle(i)}
            aria-label={`Seat ${i + 1}`}
            data-cursor={taken.has(i) ? '✕' : sel.has(i) ? '−' : '+'}
          />
        ))}
      </div>
      <div className="seat-sum mono">
        <span>{sel.size} × 25 ₼</span>
        <strong>{sel.size * 25} ₼</strong>
      </div>
    </div>
  )
}

// Animated shipping route — a nod to the Carify clone.
function RouteMap({ l }) {
  const [price, setPrice] = useState(18000)
  const ship = Math.round(1450 + price * 0.035)
  return (
    <div className="vis route" onClick={(e) => e.stopPropagation()}>
      <svg viewBox="0 0 320 150" aria-hidden="true">
        <path id="rt" d="M20 110 C 90 20, 170 20, 200 70 S 280 120, 300 40" className="route-path" />
        <path d="M20 110 C 90 20, 170 20, 200 70 S 280 120, 300 40" className="route-dash" />
        <circle r="5" className="route-car">
          <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#rt" /></animateMotion>
        </circle>
        <circle cx="20" cy="110" r="4" className="route-pin" />
        <circle cx="300" cy="40" r="4" className="route-pin" />
        <text x="12" y="132" className="route-label">Busan</text>
        <text x="180" y="96" className="route-label">Poti</text>
        <text x="278" y="26" className="route-label">{l.baku}</text>
      </svg>
      <label className="calc mono">
        <span>{l.car} ${price.toLocaleString('en-US')}</span>
        <input type="range" min="5000" max="60000" step="500" value={price} onChange={(e) => setPrice(+e.target.value)}
          style={{ '--fill': `${((price - 5000) / 55000) * 100}%` }} aria-label={l.car} />
        <span>≈ ${ship.toLocaleString('en-US')} {l.ship}</span>
      </label>
    </div>
  )
}

function Card({ p, i, view, l }) {
  const ref = useRef(null)
  const onMove = (e) => {
    if (isTouch()) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    ref.current.style.setProperty('--mx', `${x * 100}%`)
    ref.current.style.setProperty('--my', `${y * 100}%`)
    ref.current.style.transform = `perspective(1100px) rotateY(${(x - 0.5) * 6}deg) rotateX(${(0.5 - y) * 6}deg)`
  }
  const reset = () => { ref.current.style.transform = '' }

  return (
    <article className="pcard" ref={ref} onPointerMove={onMove} onPointerLeave={reset} data-reveal>
      <div className="pcard-top">
        <span className="mono">0{i + 1} / {p.kind}</span>
        <span className="mono">{p.year}</span>
      </div>
      {i === 0 ? <SeatMap l={l} /> : <RouteMap l={l} />}
      <div className="pcard-body">
        <h3>{p.name}<span className="clone"> clone</span></h3>
        <div className="features">
          {p.features.map((f) => <span key={f}>{f}</span>)}
        </div>
        <p>{p.desc}</p>
        <div className="stack">
          {p.stack.map((s) => <span key={s} className="mono">{s}</span>)}
        </div>
        <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-fill pcard-link" data-cursor="↗">
          {view} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export default function Projects({ t }) {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHead index={t.index} title={t.title} sub={t.sub} />
        <div className="pgrid">
          {t.items.map((p, i) => <Card key={p.name} p={p} i={i} view={t.view} l={t.vis} />)}
        </div>
      </div>
    </section>
  )
}
