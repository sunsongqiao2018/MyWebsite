import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data'

export default function LabArchive() {
  const [selected, setSelected] = useState(0)
  const [spatial, setSpatial] = useState(true)
  const project = projects[selected]
  return (
    <section
      className={`lab-archive ${spatial ? 'is-spatial' : 'is-flat'}`}
      aria-label="Interactive project archive"
    >
      <svg
        className="lab-blueprint"
        viewBox="0 0 1200 760"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M25 220H430L620 410H1170M90 700V80H700L1050 430V720M350 0V760M0 580H1200" />
        <circle cx="840" cy="360" r="195" />
        <circle cx="840" cy="360" r="160" />
        <path d="M820 360h40m-20-20v40M75 80h30m-15-15v30M415 220h30m-15-15v30" />
      </svg>
      <header className="lab-title">
        <span className="eyebrow">SONGQIAO SUN / INDEPENDENT DEVELOPER</span>
        <h1>
          IDEAS INTO
          <br />
          <strong>EXPERIENCES.</strong>
        </h1>
        <div className="lab-title-rule">
          <span>PERSONAL RESEARCH ARCHIVE</span>
          <span>VOL. 02</span>
        </div>
        <p>
          Software engineering. Game development.
          <br />A space for things worth building.
        </p>
      </header>
      <div className="lab-readout" aria-live="polite">
        <div className="readout-line">
          <span>SELECTED FILE</span>
          <span>0{selected + 1} / 03</span>
        </div>
        <span className="eyebrow">{project.category}</span>
        <h2>{project.title}</h2>
        <p>{project.short}</p>
        <Link to={`/projects?project=${project.id}`} className="lab-open">
          OPEN PROJECT <FiArrowUpRight />
        </Link>
      </div>
      <div className="key-stage">
        <div className="key-bed">
          {projects.map((item, group) => (
            <button
              key={item.id}
              className={`key-bank ${selected === group ? 'selected' : ''}`}
              aria-label={`Select ${item.title}`}
              aria-pressed={selected === group}
              onClick={() => setSelected(group)}
              style={{ '--group': group }}
            >
              <span className="key-bank-label">
                {item.id} / {item.category}
                <b>↗</b>
              </span>
              {Array.from({ length: 10 }, (_, index) => (
                <span
                  className="archive-key"
                  key={index}
                  style={{ '--key': index }}
                  aria-hidden="true"
                >
                  <span className="key-top" />
                  <span className="key-side" />
                  <span className="key-front" />
                  <span className="key-tick">
                    {item.id}.{String(index + 1).padStart(2, '0')}
                  </span>
                </span>
              ))}
            </button>
          ))}
        </div>
      </div>
      <div className="lab-edge" aria-hidden="true">
        INDEX — 001 / 003 <span>＋</span> EXPLORATION IN PROGRESS
      </div>
      <div className="lab-bottom">
        <button
          className="spatial-toggle"
          aria-pressed={spatial}
          onClick={() => setSpatial(!spatial)}
        >
          <span className="status-dot" />
          {spatial ? '3D VIEW' : 'FLAT VIEW'} <span>↗</span>
        </button>
        <div className="file-dock" aria-label="Archive selection">
          {projects.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
            >
              <span>0{index + 1}</span>
              <strong>
                {['Virtual reality', 'Game systems', 'Interactive'][index]}
              </strong>
              <span>↗</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
