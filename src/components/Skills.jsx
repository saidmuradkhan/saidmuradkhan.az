import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { skillGroups } from '../data.js'
import { useInView } from '../hooks.jsx'

export default function Skills({ t }) {
  const [filter, setFilter] = useState('all')
  const [ref, seen] = useInView(0.3)

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHead index={t.index} title={t.title} />
        <div className="filters" data-reveal>
          {['all', ...skillGroups.map((g) => g.key)].map((k) => (
            <button key={k} className={filter === k ? 'on' : ''} onClick={() => setFilter(k)}>
              {k === 'all' ? '✦' : t.groups[k]}
            </button>
          ))}
        </div>
        <div className="skill-groups">
          {skillGroups.map((g) => (
            <div key={g.key} className={`sgroup ${filter !== 'all' && filter !== g.key ? 'dim' : ''}`} data-reveal>
              <h4 className="mono">{t.groups[g.key]}</h4>
              <div className="chips">
                {g.items.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="langs" ref={ref} data-reveal>
          <h4 className="mono">{t.langTitle}</h4>
          {t.langs.map((l, i) => (
            <div key={l.name} className="lang">
              <span className="lname">{l.name}</span>
              <span className="lbar"><i style={{ transform: `scaleX(${seen ? l.v / 100 : 0})`, transitionDelay: `${i * 120}ms` }} /></span>
              <span className="mono llevel">{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
