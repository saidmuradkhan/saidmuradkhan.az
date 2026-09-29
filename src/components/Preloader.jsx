import { useEffect, useState } from 'react'
import { reducedMotion } from '../hooks.jsx'

export default function Preloader({ label, onDone }) {
  const [n, setN] = useState(0)
  const [phase, setPhase] = useState('count') // count → leave → gone

  useEffect(() => {
    const dur = reducedMotion() ? 1 : 1500
    const start = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      setN(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => { setPhase('leave'); onDone() }, 250)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (phase !== 'leave') return
    const id = setTimeout(() => setPhase('gone'), 1000)
    return () => clearTimeout(id)
  }, [phase])

  if (phase === 'gone') return null
  return (
    <div className={`preloader ${phase === 'leave' ? 'leave' : ''}`} aria-hidden="true">
      <div className="pre-name">
        {'SAID MURADKHAN'.split('').map((c, i) => (
          <span key={i} style={{ animationDelay: `${i * 40}ms` }}>{c === ' ' ? ' ' : c}</span>
        ))}
      </div>
      <div className="pre-bottom">
        <span className="mono">{label}…</span>
        <span className="pre-count">{n}<small>%</small></span>
      </div>
      <div className="pre-bar" style={{ transform: `scaleX(${n / 100})` }} />
    </div>
  )
}
