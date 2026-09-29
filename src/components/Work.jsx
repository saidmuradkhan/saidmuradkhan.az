import { useState } from 'react'
import SectionHead from './SectionHead.jsx'

export default function Work({ t }) {
  const [open, setOpen] = useState(0)

  return (
    <section id="work" className="section">
      <div className="wrap">
        <SectionHead index={t.index} title={t.title} />
        <div className="work-grid">
          <div className="work-side">
          <aside className="work-company" data-reveal>
            <div className="company-badge">L</div>
            <h3>{t.company}</h3>
            <p className="role">{t.role}</p>
            <p className="mono muted">{t.period}</p>
            <p className="mono muted">{t.place}</p>
            <span className="now-pill mono"><i /> NOW</span>
          </aside>
          <a href={t.also.url} target="_blank" rel="noreferrer" className="work-also" data-reveal>
            <span className="mono muted">{t.also.label}</span>
            <span className="also-row">
              <span className="also-badge">M</span>
              <span>
                <strong>{t.also.name}</strong>
                <span className="also-role">{t.also.role} · {t.also.note}</span>
              </span>
              <span className="arr" aria-hidden="true">↗</span>
            </span>
          </a>
          </div>
          <div className="work-list">
            {t.items.map((it, i) => (
              <article key={it.name} className={`work-item ${open === i ? 'open' : ''}`} data-reveal>
                <button className="work-row" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span className="mono num">0{i + 1}</span>
                  <span className="work-name">{it.name}</span>
                  <span className="work-tag">{it.tag}</span>
                  <span className="plus" aria-hidden="true">
                    <svg viewBox="0 0 12 12" width="12" height="12">
                      <line x1="1" y1="6" x2="11" y2="6" />
                      <line className="v" x1="6" y1="1" x2="6" y2="11" />
                    </svg>
                  </span>
                </button>
                <div className="work-body">
                  <div>
                    <p className="mono muted date">{it.date}
                      {it.url && <> · <a href={it.url} target="_blank" rel="noreferrer" className="ulink">{it.url.replace('https://', '')} ↗</a></>}
                    </p>
                    <ul>
                      {it.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
            <p className="work-across" data-reveal>{t.across}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
