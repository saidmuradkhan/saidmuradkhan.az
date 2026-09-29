import { marquee } from '../data.js'

export default function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((m, i) => (
          <span key={i}>{m}<i>✦</i></span>
        ))}
      </div>
    </div>
  )
}
