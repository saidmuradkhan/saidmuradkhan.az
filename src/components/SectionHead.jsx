export default function SectionHead({ index, title, sub }) {
  return (
    <div className="sec-head" data-reveal>
      <span className="sec-index mono">({index})</span>
      <h2 className="sec-title">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </div>
  )
}
