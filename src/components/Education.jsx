import SectionHead from './SectionHead.jsx'

export default function Education({ t }) {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <SectionHead index={t.index} title={t.title} />
        <div className="edu">
          {t.items.map((e) => (
            <div key={e.where} className="edu-item" data-reveal>
              <span className="mono edu-when">{e.when}</span>
              <div>
                <h3>{e.what}</h3>
                <p className="edu-where">{e.where}</p>
              </div>
              <p className="muted">{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
