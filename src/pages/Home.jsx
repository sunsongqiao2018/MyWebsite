import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiArrowRight,
  FiBox,
  FiCode,
  FiCpu,
} from 'react-icons/fi'
import profile from '../assets/profileimage.jpeg'
import { projects } from '../data'
import LabArchive from '../components/LabArchive'
export default function Home() {
  return (
    <div className="page home-page">
      <LabArchive />
      <div className="page-meta">
        <span>
          <i className="status-dot" /> PERSONAL PORTFOLIO
        </span>
        <span>01 / OVERVIEW</span>
      </div>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">SOFTWARE ENGINEER & GAME DEVELOPER</div>
          <h2 className="profile-headline">
            BUILDING
            <br />
            WORLDS<span className="yellow">.</span>
            <br />
            <span className="outline-text">CONNECTING</span>
            <br />
            PEOPLE<span className="yellow">.</span>
          </h2>
          <p className="hero-description">
            I’m Songqiao Sun. I turn code into immersive
            <br className="desktop-break" /> experiences — from multiplayer VR
            to the web.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              EXPLORE MY WORK <FiArrowUpRight />
            </Link>
            <Link className="text-link" to="/about">
              Meet the developer <FiArrowRight />
            </Link>
          </div>
          <div className="hero-footnote">
            <span>UNITY / SOFTWARE / INTERACTIVE</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
        <div className="portrait-panel">
          <div className="portrait-top">
            <span>PROFILE / SS–001</span>
            <span>＋</span>
          </div>
          <img className="hero-portrait" src={profile} alt="Songqiao Sun" />
          <div className="portrait-grid" aria-hidden="true" />
          <span className="portrait-side">ENGINEERING THE EXPERIENCE</span>
          <div className="portrait-caption">
            <span className="eyebrow">THE PERSON BEHIND THE CODE</span>
            <h2>
              SONGQIAO
              <br />
              SUN<span>↗</span>
            </h2>
            <div className="portrait-caption-bottom">
              <span>MSc / COMPUTER SCIENCE</span>
              <span className="barcode" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
      <section className="expertise-strip" aria-label="Areas of expertise">
        {[
          [
            FiCode,
            '01',
            'Software engineering',
            'Thoughtful systems. Reliable foundations.',
          ],
          [
            FiBox,
            '02',
            'Game development',
            'Immersive worlds. Shared experiences.',
          ],
          [
            FiCpu,
            '03',
            'Creative technology',
            'Curiosity turned into interaction.',
          ],
        ].map(([Icon, n, title, text]) => (
          <div className="expertise" key={n}>
            <Icon />
            <div>
              <span className="eyebrow">SPECIALIZATION / {n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="selected-work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PROJECT ARCHIVE / 01–03</span>
            <h2>
              Selected work<span className="yellow"> /</span>
            </h2>
          </div>
          <Link className="text-link" to="/projects">
            View all projects <FiArrowUpRight />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              className="project-card"
              key={project.id}
              to={`/projects?project=${project.id}`}
            >
              <div className="project-thumbnail">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                />
                <span className="project-index">{project.id} /</span>
                <span className="project-open">
                  <FiArrowUpRight />
                </span>
              </div>
              <span className="eyebrow">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="contact-banner">
        <div>
          <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
          <h2>Let’s build something meaningful.</h2>
        </div>
        <Link className="button primary" to="/contact">
          GET IN TOUCH <FiArrowUpRight />
        </Link>
      </section>
    </div>
  )
}
