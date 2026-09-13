import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data'

export default function LabArchive() {
  const [spatial, setSpatial] = useState(true)
  return (
    <section
      className={`lab-archive project-files ${spatial ? 'is-spatial' : 'is-flat'}`}
      aria-label="Project files"
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
      </svg>
      <header className="lab-title">
        <span className="eyebrow">SONGQIAO SUN / PROJECT ARCHIVE</span>
        <h1>
          BUILT BY ME.
          <br />
          <strong>OPEN A FILE.</strong>
        </h1>
        <div className="lab-title-rule">
          <span>SOFTWARE / GAMES / INTERACTION</span>
          <span>03 FILES</span>
        </div>
        <p>
          My work, one project at a time.
          <br />
          Pull out a file to explore what’s inside.
        </p>
      </header>
      <div className="file-instruction">
        <span>PORTFOLIO / INDEX</span>
        <p>
          Each key is a project.
          <br />
          <strong>Click to open. ↗</strong>
        </p>
      </div>
      <nav className="project-file-stage" aria-label="Open a project">
        <div className="project-file-rack">
          {projects.map((item) => (
            <Link
              key={item.id}
              className="project-file"
              to={`/projects?project=${item.id}`}
              aria-label={`Open ${item.title}`}
            >
              <span className="file-face">
                <span className="file-tab">
                  FILE / {item.id}
                  <FiArrowUpRight />
                </span>
                <img src={item.images[0]} alt="" />
                <span className="file-category">{item.category}</span>
                <h2>{item.title}</h2>
                <span className="file-tech">
                  {item.technologies.slice(0, 3).join(' / ')}
                </span>
                <span className="file-enter">
                  VIEW PROJECT <FiArrowUpRight />
                </span>
              </span>
              <span className="file-thickness" aria-hidden="true" />
              <span className="file-foot" aria-hidden="true">
                SS — {item.id}
              </span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="lab-bottom">
        <button
          className="spatial-toggle"
          aria-pressed={spatial}
          onClick={() => setSpatial(!spatial)}
        >
          <span className="status-dot" />
          {spatial ? '3D VIEW' : 'FLAT VIEW'} <span>↗</span>
        </button>
        <span className="file-bottom-note">
          03 PROJECTS / SELECT A FILE TO OPEN ↗
        </span>
      </div>
    </section>
  )
}
